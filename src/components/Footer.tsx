import Button from '@/components/Buttons/Button'

export default function Footer() {
    const svgStyle = {
        display: 'block',
        height: '16px',
        width: '16px',
        fill: 'currentcolor'
    }
    return (
        <footer className="bg-[var(--background-secondary)] px-section pt-8 text-sm">
            <div className="flex footer-pages flex-col md:flex-row py-8 md:gap-[10rem] lg:gap-[18rem]">
                <div className="support py-(--spacing-mid) md:border-none border-b-[1px] border-(--colour-border)">
                    <h3 className="text-lg font-bold text-[14px]">Support</h3>
                    <ul>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Our COVID-19 Response</a></li>
                        <li><a href="#">Supporting people with disabilities</a></li>
                    </ul>
                </div>
                <div className="hosting py-(--spacing-mid) md:border-none border-b-[1px] border-b-(--colour-border)">
                    <h3 className="text-lg font-bold text-[14px]">Hosting</h3>
                    <ul>
                        <li>
                            <a href="#">Airbnb your home</a>
                        </li>
                        <li>
                            <a href="#">AirCover for Hosts</a>
                        </li>
                        <li>
                            <a href="#">Hosting resources</a>
                        </li>
                        <li>
                            <a href="#">Community forum</a>
                        </li>
                        <li>
                            <a href="#">Hosting responsibly</a>
                        </li>
                        <li>
                            <a href="#">Airbnb-friendly apartments</a>
                        </li>
                        <li>
                            <a href="#">Join a free Hosting class</a>
                        </li>
                        <li>
                            <a href="#">Find a co‑host</a>
                        </li>

                    </ul>
                </div>
                <div className="airbnb py-(--spacing-mid) md:border-none border-b-[1px] border-b-(--colour-border)">
                    <h3 className="text-lg font-bold text-[14px]">Airbnb</h3>
                    <ul>
                        <li>
                            <a href="#">2025 Summer Release</a>
                        </li>
                        <li>
                            <a href="#">Newsroom</a>
                        </li>
                        <li>
                            <a href="#">New features</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Investors</a>
                        </li>
                        <li>
                            <a href="#">Gift cards</a>
                        </li>
                        <li>
                            <a href="#">Airbnb.org emergency stays</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="md:border-(--colour-border) md:border-t-[1px] py-(--spacing-mid) flex flex-col justify-between lg:flex-row">
                <div className="links order-first lg:order-last flex flex-col md:flex-row justify-between">
                    <div className="flex items-center mb-2 gap-2 lg:me-5">
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
                            <span>English(US)</span>
                        </Button>
                        <Button>$<span>USD</span></Button>
                    </div>
                    <ul className="flex py-2 mb-2 gap-4">
                        <li>
                            <a href="https://www.facebook.com/airbnb/">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}><path d="m15.9700599 1c-8.26766469 0-14.9700599 6.70239521-14.9700599 14.9700599 0 7.0203593 4.83353293 12.9113772 11.3538922 14.5293413v-9.954491h-3.08682633v-4.5748503h3.08682633v-1.9712575c0-5.09520959 2.305988-7.45688623 7.3083832-7.45688623.948503 0 2.58503.18622754 3.2544911.37185629v4.14670654c-.3532934-.0371257-.9670659-.0556886-1.7293414-.0556886-2.454491 0-3.402994.9299401-3.402994 3.3473054v1.6179641h4.8898204l-.8401198 4.5748503h-4.0497006v10.2856287c7.4125749-.8952096 13.1562875-7.2065868 13.1562875-14.860479-.0005988-8.26766469-6.702994-14.9700599-14.9706587-14.9700599z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/airbnb/">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}><path d="m18.461198 13.6964303 10.9224206-12.6964303h-2.5882641l-9.4839364 11.024132-7.57479218-11.024132h-8.73662592l11.4545721 16.6704401-11.4545721 13.3141565h2.58841076l10.01528114-11.6418582 7.9995355 11.6418582h8.7366259l-11.879291-17.2881663zm-3.5451833 4.1208802-1.1605868-1.66-9.23437656-13.20879216h3.97564793l7.45224943 10.65991686 1.1605868 1.66 9.6870415 13.8562592h-3.9756479l-7.9049144-11.3067482z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/airbnb/">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={svgStyle}><path d="m9.78762432 1.10490642c-1.596.0753-2.6859.33-3.6387.7044-.9861.3843-1.8219.9-2.6535 1.7346s-1.3437 1.671-1.7253 2.6586c-.3693.9549-.6195 2.0457-.69 3.6426-.0705 1.59689998-.0861 2.11019998-.0783 6.18359998s.0258 4.584.1032 6.1842c.0762 1.5957.33 2.6853.7044 3.6384.3849.9861.9 1.8216 1.7349 2.6535s1.6707 1.3428 2.6607 1.725c.954.3687 2.0451.6201 3.6417.69 1.59659998.0699 2.11049998.0861 6.18269998.0783s4.5849-.0258 6.1848-.1017 2.6838-.3315 3.6372-.7041c.9861-.3858 1.8222-.9 2.6535-1.7352s1.3431-1.6722 1.7244-2.6604c.3696-.954.6207-2.0451.69-3.6405.0699-1.6011.0864-2.1123.0786-6.1851s-.0261-4.5834-.102-6.18299998c-.0759-1.5996-.33-2.6859-.7041-3.6396-.3855-.9861-.9-1.821-1.7346-2.6535s-1.6722-1.344-2.6601-1.7244c-.9546-.3693-2.0451-.621-3.6417-.69s-2.1105-.0867-6.1842-.0789-4.5837.0252-6.18359998.1032m.1752 27.11639998c-1.4625-.0636-2.2566-.3066-2.7858-.51-.7008-.27-1.2-.5964-1.7274-1.1187s-.8514-1.0233-1.125-1.7226c-.2055-.5292-.453-1.3224-.5214-2.7849-.0744-1.5807-.09-2.0553-.0987-6.06s.0066-4.4787.0759-6.05999998c.0624-1.4613.3069-2.2563.51-2.7852.27-.7017.5952-1.2 1.1187-1.7271s1.023-.8517 1.7229-1.1253c.5286-.2064 1.3218-.4518 2.7837-.5214 1.58189998-.075 2.05589998-.09 6.05999998-.0987s4.4793.0063 6.0618.0759c1.4613.0636 2.2566.3057 2.7849.51.7011.27 1.2.5943 1.7271 1.1187s.852 1.0221 1.1256 1.7235c.2067.5271.4521 1.32.5211 2.7828.0753 1.58189998.0924 2.05619998.0996 6.05999998s-.0069 4.4793-.0762 6.06c-.0639 1.4625-.3063 2.2569-.51 2.7867-.27.7005-.5955 1.2-1.1193 1.7268s-1.0227.8514-1.7229 1.125c-.528.2061-1.3221.4521-2.7828.5217-1.5819.0744-2.0559.09-6.0615.0987s-4.4781-.0075-6.05999998-.0759m12.22799748-20.23829998c.0012175.72808507.4409323 1.38373514 1.114083 1.66118326s1.4471512.12204713 1.9610409-.39373063.6664512-1.2903429.3865363-1.96247162c-.2799148-.67212872-.937173-1.10943617-1.6652577-1.10798463-.9938786.00199-1.7980584.80912438-1.7964025 1.80300362m-13.89301175 8.03189998c.00841427 4.254 3.46321425 7.6947 7.71631425 7.6866143 4.2531-.0081143 7.6962-3.4626143 7.6881143-7.7166143-.0081143-4.254-3.4638143-7.69559998-7.7175143-7.68721533-4.2537.00841535-7.69499998 3.46381533-7.68691425 7.71721533m2.70180425-.0054c-.0054522-2.761471 2.2287325-5.0045146 4.9902035-5.0099904 2.761471-.0054558 5.0045175 2.228726 5.009997 4.990197.0054593 2.761471-2.2287195 5.0045204-4.9901905 5.0100045-1.3261582.0027764-2.5990901-.5214481-3.5386825-1.4573271s-1.4688535-2.2067251-1.4713275-3.532884"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="policy flex flex-col gap-2 md:flex-row">
                    <div>© 2025 Airbnb, Inc.</div>
                    <span className="hidden md:block">·</span>
                    <ul className="flex gap-2">
                        <li><a href="#">Terms</a></li>
                        <li aria-hidden='true'>·</li>
                        <li><a href="#">Sitemap</a></li>
                        <li aria-hidden='true'>·</li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
      </footer>
    )
}