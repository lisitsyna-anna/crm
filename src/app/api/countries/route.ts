import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Country from '@/models/country';

export const GET = async () => {
  try {
    await connectMongoDB();
    const counries = await Country.find({});
    return NextResponse.json(counries, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch counries: ${error instanceof Error ? error.message : error}`,
      },
      { status: 500 },
    );
  }
};
