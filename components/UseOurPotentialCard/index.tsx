
import React from 'react'
import './index.css';
import StyledText from '../StyledText/StyledText';
import GradientText from '../GradientText/GradientText';
import Button from '../Button/Button';
import Image from 'next/image';
import image1 from '../../assets/images/usePotential.jpg'

export default function UseOurPotentialCard() {
    return (
        <div className='usePotentialCard mt-16 mb-16'>

            <div className='CardText'>
                <p className='GreenText'>Maximize Your Website's Potential</p>
                <GradientText className='mt-4' element="h1" style={{ lineHeight: "1.4", fontSize: '38px', fontWeight: '500' }}>
                    Use our Team's exceptional talents!
                </GradientText>
                <StyledText className='mt-4' element="p" fontSize="18px" style={{ lineHeight: 1.8 }}>
                    Harness our expertise to enhance your digital presence across all platforms
                </StyledText>

                <Button label="View Our team" style={{ width: 200, marginTop: '20px' }} />

            </div>

            <div className='CardImage'>
            <Image
                className="rounded-lg border border-[#eeeeee1a]"
                src={image1}
                alt="Team Image"
            />
            </div>
        </div>
    )
}
