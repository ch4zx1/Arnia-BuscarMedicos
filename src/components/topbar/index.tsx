import * as S from './styles'

import HamburguerImage from '@/assets/hamburguer.svg'
import UserImage from '@/assets/user.svg'
import ArrowImage from '@/assets/arrow.svg'
import { Button } from '../ui'

function TopBar() {
  return (
    <>
      <S.Body>
        <Button>
          <img src={HamburguerImage}></img>
        </Button>
        <S.ContainerRight>
          <S.ContainerUser>
            <img src={UserImage}></img>
            <S.ContainerUserInfo>
              <span>Izabel</span>
              <p>izabel@gmail.com</p>
            </S.ContainerUserInfo>
          </S.ContainerUser>
          <Button>
            <img src={ArrowImage}></img>
          </Button>
        </S.ContainerRight>
      </S.Body>
    </>
  )
}
export default TopBar
