import './GamingLibrary.css';
import {SectionWrapper,SectionHeader,Lists, ButtonFloat} from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

   const cardsList = GamingLibraryData.map(card => {
      return <Lists key={card.id} image={card.image} title={card.title} category={card.category} dateAdded={card.DateAdded} HoursPlayed={card.HoursPlayed} currently={card.Currently} />
   })
   return (
      <>
         <SectionWrapper className='section-wrapper'>
            <SectionHeader className='section-header'>
               <h4 className='section-title'>
                  <span className='section-title-primary'>YourGaming</span> <span className='section-title-light'>Library</span>
               </h4> 
            </SectionHeader>
            <div className="most-popular-items">
               {cardsList}
            </div>
            <ButtonFloat URL="#" text="View YourLibrary"/>
         </SectionWrapper>
      </>
   )
}

export default GamingLibrary