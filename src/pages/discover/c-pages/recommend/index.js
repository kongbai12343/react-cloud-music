import React, { memo } from 'react'

import Bannner from './c-cpns/banner';
import { RecommendWrapper } from './style'


function Recommend(props) {
  return (
    <RecommendWrapper>
      <Bannner />
    </RecommendWrapper>
  )
}

export default memo(Recommend);

// function Recommend(props) {

//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>Recommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));