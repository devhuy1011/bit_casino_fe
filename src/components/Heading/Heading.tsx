import styled from 'styled-components'
import { tags, sizes, HeadingProps } from './types'
import Text from '../Text/Text'

const style = {
  [sizes.MD]: {
    fontSize: '20px',
    fontSizeLg: '20px',
  },
  [sizes.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px',
  },
  [sizes.XL]: {
    fontSize: '32px',
    fontSizeLg: '40px',
  },
  [sizes.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px',
  },
}

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-weight: 600;
  line-height: 1.1;
`

Heading.defaultProps = {
  as: tags.H2,
}

export default Heading
