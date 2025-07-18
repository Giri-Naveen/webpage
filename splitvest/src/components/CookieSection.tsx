import React from "react";
import Link from "next/link";

const CookieSection = () => {
    return(
        <section className="mt-40 py-20 text-white">
            <div> 
                <h2
                  className="text-center text-[36px] md:text-[38px] xl:text-[40px] font-normal tracking-wider uppercase leading-[1.0]"
                  style={{ color: '#e8d2ff' }}
                >
                    Cookies
                </h2>
                <div className="text-[15px] md:text-[16px] xl:text-[17px] text-[#B4B4CC] mt-[26px] tracking-wide text-center">
                    <Link href="/" passHref>
                        <span className="hover:text-blue-500 transition-colors cursor-pointer">Home</span>
                    </Link>
                    <span className="mx-1 md:mx-2 xl:mx-3">/</span>
                    Cookies
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-16 pt-[10px]">
                <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />

                <div className="flex items-center gap-3 px-6">
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                    <div className="w-[200px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                </div>

                <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />
            </div> 

            <div className="px-6 md:px-8 xl:px-24 mt-36 pt-2">
                <div className="max-w-7xl">
                   <h2
                     className="text-[32px] md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Who we are
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[19px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        <span className="text-[18px] font-semibold tracking-wider">Suggested text: </span> 
                        Our website address is: https://frenify.net/envato/frenify/html/meta-portal/1/
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Comments
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        <span className="text-[18px] font-semibold tracking-wider">Suggested text: </span> 
                        When visitors leave comments on the site we collect the data shown in the comments form, 
                        and also the visitor’s IP address and browser user agent string to help spam detection.
                    </p>
                    <p className="mt-[26px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        An anonymized string created from your email address (also called a hash) may be provided 
                        to the Gravatar service to see if you are using it. The Gravatar service privacy policy is 
                        available here: https://automattic.com/privacy/. After approval of your comment, your 
                        profile picture is visible to the public in the context of your comment.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Media
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        <span className="text-[18px] font-semibold tracking-wider">Suggested text: </span> 
                        If you upload images to the website, you should avoid uploading images with embedded 
                        location data (EXIF GPS) included. Visitors to the website can download and extract 
                        any location data from images on the website.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Cookies
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        <span className="text-[18px] font-semibold tracking-wider">Suggested text: </span> 
                        If you leave a comment on our site you may opt-in to saving your name, email address and 
                        website in cookies. These are for your convenience so that you do not have to fill in 
                        your details again when you leave another comment. These cookies will last for one year.
                    </p>
                    <p className="mt-6 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        If you visit our login page, we will set a temporary cookie to determine if your browser 
                        accepts cookies. This cookie contains no personal data and is discarded when you close 
                        your browser.
                    </p>
                    <p className="mt-6 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        When you log in, we will also set up several cookies to save your login information and 
                        your screen display choices. Login cookies last for two days, and screen options cookies 
                        last for a year. If you select "Remember Me", your login will persist for two weeks. If 
                        you log out of your account, the login cookies will be removed.
                    </p>
                    <p className="mt-6 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        If you edit or publish an article, an additional cookie will be saved in your browser. 
                        This cookie includes no personal data and simply indicates the post ID of the article 
                        you just edited. It expires after 1 day.
                    </p>
                </div>
            </div> 
        </section>
    );
}

export default CookieSection