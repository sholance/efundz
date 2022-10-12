import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
const fs = require('fs');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    //Read the json data file data.json
    const sample = fs.readFileSync(jsonDirectory + '/data.json', 'utf8');
    if (req.method === 'POST') {
        fs.writeFileSync('/data.json', JSON.stringify(req.body), () => { })
        return res.status(200).json({});
    }
    return res.status(200).json(sample);
}