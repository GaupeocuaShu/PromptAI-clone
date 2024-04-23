import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { request } from "https";
import { json } from "stream/consumers";
// GET (Read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompts = await Prompt.findById(params.id).populate('creator');
        if (!prompts) return new Response("Prompt Not Found", { status: 404 })
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Fail To Fetch All Prompts", { status: 500 })
    }
}

// PATCH (update) 
export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) return new Response("Prompt Not Found", { status: 404 })
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 });
    } catch (error) {
        return new Response("Fail To Update Prompt", { status: 500 })

    }
}

// DELETE 

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted Successfully", { status: 200 });
    } catch (error) {
        return new Response("Fail To Delete Prompt", { status: 500 })

    }
}