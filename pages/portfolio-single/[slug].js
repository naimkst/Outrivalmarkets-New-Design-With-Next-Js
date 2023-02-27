import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import BlogSec from '../../components/blog';
import Oriented from '../../components/Oriented/Oriented';
import Portfolios from '../../api/portfolio'
import PortfolioHero from './portfolio-component/PortfolioHero';
import Image from 'next/image';
import pimg1 from '/public/assets/images/portfolio/single/1.jpg'
import pimg2 from '/public/assets/images/portfolio/single/2.jpg'
import pimg3 from '/public/assets/images/portfolio/single/3.jpg'
import Link from 'next/link'

const PortfolioSinglePage = (props) => {
    const router = useRouter()

    const PortfolioDetails = Portfolios.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
      }

    return (
        <Fragment>
            <PortfolioHero dTitle={PortfolioDetails?.pTitle} />
            <div className="portfolio-single" id='portfolio'>
                <div className="container">
                    <div className="portfolio-features">
                        <ul>
                            <li><span>SERVICES</span> Fresh & Frozen Foods</li>
                            <li><span>Year</span>2022</li>
                            <li><span>Industry</span>Fresh & Frozen Foods</li>
                        </ul>
                    </div>
                    <div className="portfolio-img">
                        <Image src={PortfolioDetails?.pImg} alt="" />
                    </div>

                    <div className="portfolio-single-text">
                        <span>The project:</span>
                        <p>Hermolis was established in 1956 and their branding met that outdated vibe. When the world only keeps advancing and new competitors begin to flourish, the need for rebranding is real.</p>
                        <p>We wanted to add a fresh face to the company, send off 2021 vibes and engage with their end users.</p>
                    </div>

                    <div className="portfolio-single-text">
                        <span>End goal:</span>
                        <p>Our mission began with an attractive new logo.We then began upping their online presence by creating a modern functioning website and gaining popularity on social media.</p>
                    </div>

                    <div className="portfolio-single-img-wrap">
                        <div className="row">
                            <div className="col-lg-6 col col-12">
                                <Image src={pimg1} alt="" />
                            </div>
                            <div className="col-lg-6 col col-12">
                                <Image src={pimg2} alt="" />
                            </div>
                            <div className="col-lg-12 col col-12">
                                <Image src={pimg3} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='portfolio-section s2'>
                        <div className="sec-title">
                            <span className='sectionTitle s2 text44'>More Projects</span>
                        </div>
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-grids gallery-container clearfix">
                                        <div className="filter-container">
                                            {Portfolios.slice(0, 2).map((Portfolio, citem) => (
                                                <div className={`grid filter-item ${Portfolio.filterName}`} key={citem}>
                                                    <div className="img-holder">
                                                        <Image src={Portfolio.pImg} className="img img-responsive" alt="" />
                                                        <div className="portfolio-content">
                                                            <h2><Link onClick={ClickHandler} href="/portfolio-single/[slug]" as={`/portfolio-single/${Portfolio.slug}`}>{Portfolio.pTitle}</Link></h2>
                                                            <span>{Portfolio.pSub}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Oriented />
            <BlogSec />
        </Fragment>
    )
};
export default PortfolioSinglePage;
