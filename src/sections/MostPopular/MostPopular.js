import './MostPopular.css';
import {SectionWrapper, SectionHeader, Card, ButtonFloat} from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'

const MostPopular = () => {
  const cards = MostPopularData.map(card => {
    return <Card key={card.id}        image={card.image} 
                 title={card.title}   category={card.category} 
                 rate={card.rate}     download={card.download}/>
  })

  return (
    <>
    <SectionWrapper className='section-wrapper'>
      <SectionHeader className='section-header'>
        <h4 className='section-title'>
          <span className='section-title-primary'>Most Popular</span> <span className='section-title-light'>Right Now</span></h4> 
      </SectionHeader>
      <div className="most-popular-items">
        {cards}
      </div>
      <ButtonFloat URL="#" text="Discover Popular"/>
    </SectionWrapper>
    </>
  )
}

export default MostPopular