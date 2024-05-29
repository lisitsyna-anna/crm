import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Sale from '@/models/sale';

export const GET = async () => {
  try {
    await connectMongoDB();
    const sales = await Sale.find({}).populate('company');
    return NextResponse.json(sales, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch summary stats: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
