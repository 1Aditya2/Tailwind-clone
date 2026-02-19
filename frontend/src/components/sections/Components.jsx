import React from 'react'
import componentImage from '../../assets/Components/componentImage.png'

const Components = () => {
    return (
        <section className='relative z-10 bg-white py-16 md:py-24 lg:py-[7.5rem]'>
            <div className='container'>
                <div className='mx-auto mb-12 w-full max-w-[470px] text-center lg:mb-[3.75rem]'>
                    <p class="mb-5 text-lg text-primary">Other Notable Features</p>
                    <p className='text-3xl font-bold !leading-[1.2] text-title-color md:text-[40px]'>
                        Build Admin Panel Effortlessly
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='mx-auto grid w-full max-w-[1170px] space-y-16 md:space-y-24 lg:space-y-[130px]'>
                    {[new Array(4).fill('').map((e, i) => {
                        return (
                            i%2 === 0
                              ? <div key={i} className='flex items-center gap-[3.75rem] max-lg:flex-col max-lg:gap-y-10 xl:gap-24'>
                              <div class="w-full max-lg:mx-auto lg:max-w-[500px]">
                                  <h3 class="mb-[18px] text-lg text-primary">Your Ultimate Admin Template</h3>
                                  <h4 class="text-2xl font-semibold text-title-color xl:text-4xl">7 Unique Dashboards for Various Use-cases</h4>
                                  <div class="mt-8">
                                      <div class="mb-9">
                                          <h5 class="mb-2 text-xl font-semibold text-text">Dark/Light Mode Support</h5>
                                          <p class="text-base font-light text-text-secondary">Allow Users to seamlessly Switch between Dark/Light Mode – Across All React Components and Pages</p>
                                      </div>
                                      <div>
                                          <h5 class="mb-2 text-xl font-semibold text-text">Optimized Development Workflow</h5>
                                          <p class="text-base font-light text-text-secondary">Effortless Development and Customization with seamless Webpack and NPM support.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='aspect-[570/408] max-w-[570px] overflow-hidden rounded-3xl border border-gray-100 shadow-feature bg-[#fcfcfc] lg:ml-auto'>
                                  <img src={componentImage} alt='componentimage' />
                              </div>
                          </div>
                              : <div key={i} className='flex items-center gap-[3.75rem] max-lg:flex-col max-lg:gap-y-10 xl:gap-24'>
                        
                              <div className='aspect-[570/408] max-w-[570px] overflow-hidden rounded-3xl border border-gray-100 shadow-feature bg-[#fcfcfc] lg:ml-auto'>
                                  <img src={componentImage} alt='componentimage' />
                              </div>
                              <div class="w-full max-lg:mx-auto lg:max-w-[500px]">
                                  <h3 class="mb-[18px] text-lg text-primary">Your Ultimate Admin Template</h3>
                                  <h4 class="text-2xl font-semibold text-title-color xl:text-4xl">7 Unique Dashboards for Various Use-cases</h4>
                                  <div class="mt-8">
                                      <div class="mb-9">
                                          <h5 class="mb-2 text-xl font-semibold text-text">Dark/Light Mode Support</h5>
                                          <p class="text-base font-light text-text-secondary">Allow Users to seamlessly Switch between Dark/Light Mode – Across All React Components and Pages</p>
                                      </div>
                                      <div>
                                          <h5 class="mb-2 text-xl font-semibold text-text">Optimized Development Workflow</h5>
                                          <p class="text-base font-light text-text-secondary">Effortless Development and Customization with seamless Webpack and NPM support.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                    })]}
                </div>
            </div>
        </section>
    )
}

export default Components