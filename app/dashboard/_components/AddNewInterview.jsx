"use client"
import React, {useState} from 'react'
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { chatSession } from '@/utils/GeminiAIModel';


function AddNewInterview() {
    const [openDialog, setOpenDialog]=useState(false);
    const [jobPosition,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();

    const onSubmit=async(e)=>{
        e.preventDefault();
        console.log(jobPosition, jobDesc, jobExperience);

        const InputPrompt="Job Position: "+jobPosition+", Job Experience: "+jobDesc+", Years of Experience: "+jobExperience+". Depending upon the information provided generate me "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview questions with answers in json format. Get the output with fields question and answer in JSON."
        const result = await chatSession.sendMessage(InputPrompt);
        console.log(result.response.text());
    }
    return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={()=>setOpenDialog(true)}>
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDialog}>

        <DialogContent className='max-w-2xl'>
        <DialogHeader>
        <DialogTitle className='text-2xl'>Tell us more about the job you're interviewing</DialogTitle>
        <DialogDescription>
            <form onSubmit={onSubmit}>
            <div>
                <h2>Add details about your job position/role, job description and years of experience</h2>
                <div className='mt-7 my-3'>
                    <label>Job Role/Position</label>
                    <Input placeholder='Ex. Full Stack Developer' required
                    onChange={(event)=>setJobPosition(event.target.value)}/>
                </div>
                <div className='my-3'>
                    <label>Job Description</label>
                    <Textarea placeholder='Ex. React, ML, AI, Kotlin etc' required
                    onChange={(event)=>setJobDesc(event.target.value)}/>
                </div>
                <div className='my-3'>
                    <label>Years of Experience</label>
                    <Input placeholder='Ex. 5' type='number' max='50' required
                    onChange={(event)=>setJobExperience(event.target.value)}/>
                </div>
            </div>
        <div className='flex gap-5 justify-end'>
            <Button type='button' variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
            <Button type='submit'>Start Interview</Button>
        </div>
        </form>
        </DialogDescription>
        </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewInterview