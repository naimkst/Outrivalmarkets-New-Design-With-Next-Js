import React from 'react';
import Portfolios from '../../../api/portfolio'
import Image from 'next/image';
import Link from 'next/link'

const PortfolioSection = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` })
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }


  return (

    <section className='portfolio-section section-padding' id='portfolio'>
      <div className="container">
        <div className="sec-title">
          <span className='sectionTitle s2 text44'>Our Portfolio</span>
        </div>
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="gallery-filters portfolio-menu">
                <ul>
                  <li onClick={handleFilterKeyChange('*')} className="active">All</li>
                  {Portfolios.map((Portfolio, pitem) => (
                    <li onClick={handleFilterKeyChange(Portfolio.filterName)} key={pitem}>{Portfolio.menu}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                <div className="filter-container">
                  {Portfolios.map((Portfolio, citem) => (
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
    </section>

  )
}

export default PortfolioSection;
