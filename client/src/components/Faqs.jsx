import React from 'react'

const Faqs = () => {
  const [openIndex, setOpenIndex] = React.useState(null)
    const faqsData = [
        {
            question: 'Is there any booking fee?',
            answer: 'No, browsing properties is free. Some owners may ask for a small token advance only after you confirm a visit or booking.'
        },
        {
            question: 'How do I contact the property owner?',
            answer: 'Every property page shows the owner’s phone number or a “Contact Owner” button. You will receive direct communication access.'
        },
        {
            question: 'Do I need to pay online?',
            answer: 'No. Our platform does not collect rent or deposits. All payments happen directly between you and the owner.'
        },
        {
            question: 'What documents are required for moving in?',
            answer: 'Typically: Aadhar card, One passport-size photo, Emergency contact. Some PGs may ask for college/office ID.'
        },
        {
            question: 'Is electricity and WiFi included in the rent?',
            answer: 'Most PGs include WiFi. Electricity charges may vary, especially for AC rooms. Check property details for clarity.'
        }
    ]
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className='flex flex-col items-center text-center text-slate-800 px-3 pb-10'>
                <p className='text-base font-medium text-slate-600'>FAQ</p>
                <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Frequently Asked Questions</h1>
                <p className='text-sm text-slate-500 mt-4 max-w-sm'>
                    Find quick answers about booking, payments, services, and property details.
                </p>
                <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div className='flex items-center justify-between w-full cursor-pointer border border-indigo-100 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faqs
