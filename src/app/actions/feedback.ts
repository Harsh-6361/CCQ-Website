'use server';

import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'hive.json');

export interface FeedbackData {
    name: string;
    school: string;
    role: string;
    clarity_rating: number;
    message: string;
    presentation_interest?: string;
    phone: string;
    timestamp: string;
}

export async function submitHiveFeedback(formData: FormData) {
    const rawData = {
        name: formData.get('name') as string,
        school: formData.get('school') as string,
        role: formData.get('role') as string,
        clarity_rating: parseInt(formData.get('clarity_rating') as string),
        message: formData.get('message') as string,
        presentation_interest: formData.get('presentation_interest') as string || 'No',
        phone: formData.get('phone') as string,
        timestamp: new Date().toISOString()
    };

    // Read existing data
    let currentData: FeedbackData[] = [];
    if (fs.existsSync(DATA_FILE)) {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
        try {
            currentData = JSON.parse(fileContent);
        } catch (e) {
            currentData = [];
        }
    }

    // Append new data
    currentData.push(rawData);

    // Write back to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2));

    // Calculate stats
    const total = currentData.length;
    const avgRating = currentData.reduce((acc, curr) => acc + curr.clarity_rating, 0) / total;

    return {
        success: true,
        stats: {
            total,
            average: avgRating.toFixed(1)
        }
    };
}

export async function getHiveStats() {
    if (!fs.existsSync(DATA_FILE)) {
        return { total: 0, average: '0.0' };
    }

    const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
    try {
        const currentData: FeedbackData[] = JSON.parse(fileContent);
        if (currentData.length === 0) return { total: 0, average: '0.0' };

        const total = currentData.length;
        const avgRating = currentData.reduce((acc, curr) => acc + curr.clarity_rating, 0) / total;

        return {
            total,
            average: avgRating.toFixed(1)
        };
    } catch (e) {
        return { total: 0, average: '0.0' };
    }
}
