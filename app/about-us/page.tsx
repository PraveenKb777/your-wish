'use client'
import ConnectBtn from '@/components/ConnectBtn/ConnectBtn'
import GradientText from '@/components/GradientText/GradientText'
import ParticalsEffects from '@/components/Particals/Particals'
import StyledText from '@/components/StyledText/StyledText'
import React from 'react'
import CONTENT from "@/content";
const { home } = CONTENT;
import TeamCard from '../../components/TeamCard/index'
import UseOurPotentialCard from '../../components/UseOurPotentialCard/index'

const ANIMATION_DURATION = 500;

export default function page() {
    return (
        <>
            <div className="line" />
            <div className="line line2" />

            <ParticalsEffects top={1} />

            <div className='flex justify-center items-center h-[50vh]'>
            <div className="w-[85%]">
                <GradientText className="text-5xl font-bold my-5" element="h1" style={{textAlign: "center", lineHeight: "1.4"}}>
                We're a Team of Passionate People, Bringing you Value Everyday!
                </GradientText>
                <StyledText element="p" fontSize="18px" style={{textAlign: "center"}}>
                Want to Know a little About us? Let us tell you.
                </StyledText>
            </div>
            </div>

            <div
                style={{
                    background:
                        "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 19.767%, rgba(225, 225, 225, 0.5) 49.7917%, rgba(171, 171, 171, 0.2) 80.3431%)",
                    opacity: 1,
                    height: 1,
                    width: "100vw",
                    position: "absolute",
                    left: 0,
                }}
            ></div>

           
            <div className="w-full flex flex-row justify-between items-center py-16">
                <GradientText className="text-3xl my-5 w-[48%]" element="h1" style={{lineHeight: "1.4", fontSize: '38px' }}>
                    We're on Our Journey to help people reach their goals!
                </GradientText>
                <StyledText  className='w-[48%]' element="p" fontSize="18px">
                Luma embarks on a transformative quest to empower individuals in achieving their aspirations. We pave the path towards success. Our dedicated team guides and supports you through a personalized journey, unlocking your potential. With Luma at your side, you'll conquer obstacles and reach new horizons.
                </StyledText>
            </div>

            <div
                style={{
                    background:
                        "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 19.767%, rgba(225, 225, 225, 0.5) 49.7917%, rgba(171, 171, 171, 0.2) 80.3431%)",
                    opacity: 1,
                    height: 1,
                    width: "100vw",
                    position: "absolute",
                    left: 0,
                }}
            ></div>


            <div className='flex justify-center items-center h-[50vh]' >
            <div className='w-[60%] flex flex-col justify-center items-center py-4'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30" fill="rgb(255, 255, 255)" className='my-3'>
                    <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
                </svg>

                <div className='GreenText'>our team</div>
                <GradientText className="text-3xl font-bold my-2" element="h4">
                    Meet the Team, that brings you Magic!
                </GradientText>
                <StyledText element="p" fontSize="18px" style={{ textAlign: 'center' }}>
                    Meet our dedicated team, always by your side, bringing you valuable resources and support every single day. We're here to help you thrive.
                </StyledText>
            </div>
            </div>
           

            <div className="grid grid-cols-3 gap-[30px]">
                {home.teamDetails.cardContent.map((course, index) => (
                    <TeamCard
                        key={index}
                        firstname={course.firstName}
                        lastname={course.lastName}
                        role={course.role}
                        description={course.description}
                        briefDescription={course.briefDescription}
                        buttonLabel={home.teamDetails.buttonLabel}
                        animationDuration={ANIMATION_DURATION}
                        index={index}
                    />
                ))}
            </div>

            <div>
                <UseOurPotentialCard/>
            </div>

        </>
    )
}
