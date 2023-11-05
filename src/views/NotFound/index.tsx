import React from 'react'

/** Style */
import * as S from './style'


const NotFound: React.FC = () => {
  // const dispatch = useAppDispatch()

  return (
    <S.Wrapper>
      <S.Header>
        <S.Content className="header">
    
          <S.TitleHeader>
            <h2 className='first'>더 나은</h2> 
            <h2 >서비스를 위한</h2> 
            <h2 className="color">사이트 점검중</h2>
            <h2 className='last'>입 니 다</h2> 

          </S.TitleHeader>
       

        </S.Content>
      </S.Header>
    </S.Wrapper>
  )
}

export default React.memo(NotFound)
