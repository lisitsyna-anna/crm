import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Promotion, { PromotionType } from '@/models/promotion';
import updateStats from '@/services/updateStats';
import updateHasPromotions from '@/services/updateHasPromotions';
import { Document } from 'mongoose';

export const GET = async (req: NextRequest) => {
  try {
    await connectMongoDB();
    const searchParams = req.nextUrl.searchParams;
    const companyId = searchParams.get('companyId');

    const promotions = companyId
      ? await Promotion.find({ company: companyId })
      : await Promotion.find({}).populate('company');

    return NextResponse.json(promotions, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch promotions: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  await connectMongoDB();

  try {
    const body: Omit<PromotionType, keyof Document> = await req.json();
    const promotion = new Promotion(body);
    await promotion.save();

    await updateStats({ operation: 'create', collection: 'promotion' });
    await updateHasPromotions(body.company);

    return NextResponse.json(promotion, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error creating promotion: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
