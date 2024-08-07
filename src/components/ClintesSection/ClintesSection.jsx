import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ClintesSection() {
  return <>
    <section className='py-36' style={{ backgroundImage: `url('https://template.hasthemes.com/furnish/furnish/img/bg/1.jpg')`, backgroundSize: 'cover' }}>
      <div className="container">

        <Swiper>
          <SwiperSlide>
            <div className='text-center'>
              <div className='mb-6'>
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="testmonial" className='mx-auto h-[120px] w-[120px] rounded-full' />
              </div>
              <div>
                <p className='text-[#d7d7d7] md:text-[18px] md:w-1/2 mx-auto'>
                  “ Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram. ”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <div className='mb-6'>
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="testmonial" className='mx-auto h-[120px] w-[120px] rounded-full' />
              </div>
              <div>
                <p className='text-[#d7d7d7] md:text-[18px] md:w-1/2 mx-auto'>
                  “ Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram. ”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </>
}
