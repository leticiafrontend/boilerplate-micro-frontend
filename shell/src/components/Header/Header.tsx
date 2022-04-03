import { Link } from 'react-router-dom'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <Link to="/">Shell</Link>
      <Link to="/content">Content</Link>
    </S.Container>
  )
}
