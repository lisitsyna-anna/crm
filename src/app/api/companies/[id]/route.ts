import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Company from '@/models/company';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  await connectMongoDB();
  try {
    const company = await Company.findById(params.id)
      .populate('country')
      .populate('category');

    if (!company) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }
    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error fetching company: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
