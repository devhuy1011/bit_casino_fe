import React from 'react'
import { useHistory } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Space, Button } from 'antd'
// import { SearchOutlined } from '@ant-design/icons'

import * as S from './style'

interface Props {
  value?: string
}
const { Search } = Input

const NavbarElement: React.FC<Props> = ({ value }) => {
  const history = useHistory()

  return (
    <S.BoxContainer>
      <S.Box>
        <S.Container>
          <Space.Compact size="large" className="search">
            <Input style={{ width: 500 }} addonBefore={<SearchOutlined />} placeholder='Hãy thử "Baccarat"' />
          </Space.Compact>
          <S.ButtonHandlerContainer>
            <Button className="login" size="large" block onClick={() => history.push(`login`)}>
              Đăng nhập
            </Button>
            <Button className="register" size="large" type="primary" danger onClick={() => history.push(`register`)}>
              Đăng ký
            </Button>
          </S.ButtonHandlerContainer>
        </S.Container>
      </S.Box>
    </S.BoxContainer>
  )
}

export default NavbarElement
