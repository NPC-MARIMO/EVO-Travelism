import React from 'react'
import topImg from '../assets/DestinationtopImg.jpg'

const Destination = () => {
    return (
        <>
            <div>
                {/* top img  */}
                <img className='w-full' src={topImg} alt="" />
                {/* button  */}
                <div className='w-full flex justify-center top-[-32px] relative bg-transparent'>
                    <button className='bg-[#ff3d00] text-white py-4 text-3xl font-semibold rounded-full px-10' >Top Destination</button>
                </div>

                {/* card  */}
                <div className='flex  pt-8 px-36 relative'>
                    {/* right  */}
                    <div className='w-[45%] px-10 py-4 relative'>
                        <img className='h-[400px] rounded-tl-[40px] rounded-br-[40px] flex justify-self-end' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241658434109lord-ram-ayodhya.jpg" alt="" />
                        <img className='rounded-tl-[40px] rounded-br-[40px] relative top-[-200px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                        <button className='px-6 py-2 text-xl bg-[#ff3d00] absolute bottom-10 right-16 flex text-white rounded-lg '>Overview & Trip Plan</button>
                    </div>
                    {/* left  */}
                    <div className='w-[55%] px-10 border-l-2 rounded-2xl '>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>Ayodhya, revered as one of ancient India's seven holiest towns or ‘Saptpuris’ is located on the bank of the ancient River Saryu. Ayodhya, the former capital of the Avadh area holds a special place in the hearts of devotees because it is the birthplace of Maryada Purushottam Lord Shri Ram. It is believed that the Gods themselves created this holy place. According to scriptures, numerous great kings ruled the capital city of Kosaldesh, including Ikshvaku, Prithu, Mandhata, Harishchandra, Sagar, Bhagirath, Raghu, Dileep, Dashrath, and Lord Shri Ram. During their reign, the kingdom's magnificence peaked and exemplified Ram Rajya. The famous epics, Ramayan and ShriRamcharitmanas exhibit the splendour of Ayodhya.</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>An episode of Ramayan, a page of ancient history and a cluster of tourist attractions, this town has been a major centre for pilgrims, historians, archaeologists and students alike.</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'><strong className='text-white'>Festivals :</strong> Shravan Jhoola Mela (July-Aug), Parikrama Mela (Oct-Nov), Ram Navami (March-April), Rathyatra (June-July), Saryu Snan (Oct-Nov), Ram Vivah (Nov), Ramayan Mela (Dec-Jan)</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>Summer in Ayodhya between April and June is quite warm; sometimes the mercury rises up to 47°C. Winter from November to February experiences a plunge to 10°C. The best time to plan a visit here would be between October to March</p>
                        <p className='text-[5rem] text-[#ff3d00] text-end italic absolute bottom-2 bg-transparent'>Ayodhya  Dham</p>
                    </div>
                </div>

                <div className='flex  pt-8 px-36 relative flex-row-reverse'>
                    {/* right  */}
                    <div className='w-[45%] px-10  relative py-6'>
                        <img className='h-[400px] rounded-tl-[40px] rounded-br-[40px] flex justify-self-end' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241658434109lord-ram-ayodhya.jpg" alt="" />
                        <img className='rounded-tl-[40px] rounded-br-[40px] relative top-[-200px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                        <button className='px-6 py-2 text-xl bg-[#ff3d00] absolute bottom-10 right-16 flex text-white rounded-lg '>Overview & Trip Plan</button>
                    </div>
                    {/* left  */}
                    <div className='w-[55%] px-10 border-r-2 rounded-2xl py-6'>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>Ayodhya, revered as one of ancient India's seven holiest towns or ‘Saptpuris’ is located on the bank of the ancient River Saryu. Ayodhya, the former capital of the Avadh area holds a special place in the hearts of devotees because it is the birthplace of Maryada Purushottam Lord Shri Ram. It is believed that the Gods themselves created this holy place. According to scriptures, numerous great kings ruled the capital city of Kosaldesh, including Ikshvaku, Prithu, Mandhata, Harishchandra, Sagar, Bhagirath, Raghu, Dileep, Dashrath, and Lord Shri Ram. During their reign, the kingdom's magnificence peaked and exemplified Ram Rajya. The famous epics, Ramayan and ShriRamcharitmanas exhibit the splendour of Ayodhya.</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>An episode of Ramayan, a page of ancient history and a cluster of tourist attractions, this town has been a major centre for pilgrims, historians, archaeologists and students alike.</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'><strong className='text-white'>Festivals :</strong> Shravan Jhoola Mela (July-Aug), Parikrama Mela (Oct-Nov), Ram Navami (March-April), Rathyatra (June-July), Saryu Snan (Oct-Nov), Ram Vivah (Nov), Ramayan Mela (Dec-Jan)</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>Summer in Ayodhya between April and June is quite warm; sometimes the mercury rises up to 47°C. Winter from November to February experiences a plunge to 10°C. The best time to plan a visit here would be between October to March</p>
                        <p className='text-[5rem] text-[#ff3d00] text-end italic absolute bottom-2 bg-transparent'>Ayodhya  Dham</p>
                    </div>
                </div>

                <div className='flex  pt-8 px-36 relative'>
                    {/* right  */}
                    <div className='w-[45%] px-10  relative  py-6'>
                        <img className='h-[400px] rounded-tl-[40px] rounded-br-[40px] flex justify-self-end' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241658434109lord-ram-ayodhya.jpg" alt="" />
                        <img className='rounded-tl-[40px] rounded-br-[40px] relative top-[-200px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                        <button className='px-6 py-2 text-xl bg-[#ff3d00] absolute bottom-10 right-16 flex text-white rounded-lg '>Overview & Trip Plan</button>
                    </div>
                    {/* left  */}
                    <div className='w-[55%] px-10 border-l-2 rounded-2xl  py-6'>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>Ayodhya, revered as one of ancient India's seven holiest towns or ‘Saptpuris’ is located on the bank of the ancient River Saryu. Ayodhya, the former capital of the Avadh area holds a special place in the hearts of devotees because it is the birthplace of Maryada Purushottam Lord Shri Ram. It is believed that the Gods themselves created this holy place. According to scriptures, numerous great kings ruled the capital city of Kosaldesh, including Ikshvaku, Prithu, Mandhata, Harishchandra, Sagar, Bhagirath, Raghu, Dileep, Dashrath, and Lord Shri Ram. During their reign, the kingdom's magnificence peaked and exemplified Ram Rajya. The famous epics, Ramayan and ShriRamcharitmanas exhibit the splendour of Ayodhya.</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>An episode of Ramayan, a page of ancient history and a cluster of tourist attractions, this town has been a major centre for pilgrims, historians, archaeologists and students alike.</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'><strong className='text-white'>Festivals :</strong> Shravan Jhoola Mela (July-Aug), Parikrama Mela (Oct-Nov), Ram Navami (March-April), Rathyatra (June-July), Saryu Snan (Oct-Nov), Ram Vivah (Nov), Ramayan Mela (Dec-Jan)</p>
                        <p style={{ fontFamily: 'Tour', lineHeight: '1.4' }} className='text-[#999] font-extralight text-[17px] mt-4'>Summer in Ayodhya between April and June is quite warm; sometimes the mercury rises up to 47°C. Winter from November to February experiences a plunge to 10°C. The best time to plan a visit here would be between October to March</p>
                        <p className='text-[5rem] text-[#ff3d00] text-end italic absolute bottom-2 bg-transparent'>Ayodhya  Dham</p>
                    </div>
                </div>

                {/* bottom slider */}
                <div className='p-8 mt-8'>
                    <p className='text-white text-center text-4xl '>Explore <span className='border-b-2'>More Places</span></p>
                    <div className='p-8 mt-8 flex gap-8 overflow-x-auto'>
                        <div className='w-[350px]'>
                            <img className='rounded-tl-[40px] rounded-br-[40px] relative w-[350px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                            <p className='text-white text-center mt-4 text-lg'>Vrindavan, Uttar Pradesh</p>
                        </div>
                        <div className='w-[350px]'>
                            <img className='rounded-tl-[40px] rounded-br-[40px] relative w-[350px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                            <p className='text-white text-center mt-4 text-lg'>Vrindavan, Uttar Pradesh</p>
                        </div>
                        <div className='w-[350px]'>
                            <img className='rounded-tl-[40px] rounded-br-[40px] relative w-[350px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                            <p className='text-white text-center mt-4 text-lg'>Vrindavan, Uttar Pradesh</p>
                        </div>
                        <div className='w-[350px]'>
                            <img className='rounded-tl-[40px] rounded-br-[40px] relative w-[350px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                            <p className='text-white text-center mt-4 text-lg'>Vrindavan, Uttar Pradesh</p>
                        </div>
                         <div className='w-[350px]'>
                            <img className='rounded-tl-[40px] rounded-br-[40px] relative w-[350px]' src="https://uptourism.gov.in/downloadmedia/siteContent/Year_2024/202401241609363984ram-mandir.jpg" alt="" />
                            <p className='text-white text-center mt-4 text-lg'>Vrindavan, Uttar Pradesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination