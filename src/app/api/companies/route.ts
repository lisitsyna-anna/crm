import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Company, { CompanyType } from '@/models/company';
import updateStats from '@/services/updateStats';
import { Document } from 'mongoose';

export const GET = async () => {
  try {
    await connectMongoDB();

    const companies = await Company.find({})
      .populate('country')
      .populate('category');

    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch companies: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  await connectMongoDB();

  try {
    const body: Omit<CompanyType, keyof Document | 'hasPromotions'> =
      await req.json();
    const company = new Company(body);
    await company.save();

    await updateStats({
      operation: 'create',
      collection: 'company',
      companyStatus: company.status,
    });

    return NextResponse.json(company, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error creating company: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
