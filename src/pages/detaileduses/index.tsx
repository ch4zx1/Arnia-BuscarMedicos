import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import ArrowBack from '@/assets/arrowback.svg'
import Input from '@/components/ui/input'
import Checkbox from '@/components/ui/checkbox'

type Props = {
	id: number
}

function DetailedUser({id}: Props){

	const navigate = useNavigate()

	return (
		<>
			<S.Body>
			<S.ContainerAll>
				<S.ContainerTop>
					<S.BackButton onClick={() => navigate('/users')}>
						<img src={ArrowBack}></img>
					</S.BackButton>
					<span>Usuário</span>
				</S.ContainerTop>
				<S.ContainerContent>
					<S.ContainerScroll>
						<h1>Dados pessoais</h1>
						<S.ContainerData width='820px' height='194px'>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Primeiro nome</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Sobrenome</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>E-mail</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>WhatsApp</Input>
							</S.InputCustom>
						</S.ContainerData>
						<h1>Endereço</h1>
						<S.ContainerData width='1245px' height='264px'>
							<S.InputCustom height={56}>
							<Input disabled value={''}>CEP</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Rua</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Número</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Bairro</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Cidade</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Estado</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Complemento</Input>
							</S.InputCustom>
						</S.ContainerData>
						<h1>Dados do currículo</h1>
						<S.ContainerData width='1245px' height='100px'>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Especialidades</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Cidades que deseja trabalhar</Input>
							</S.InputCustom>
							<S.InputCustom height={56}>
							<Input disabled value={''}>Locais de trabalho</Input>
							</S.InputCustom>
						</S.ContainerData>
						<S.ContainerDays>
							<span>Disponibilidade de dia e horário</span>
							<S.ContainerCheckbox>
							<Checkbox disabled checked>Domingo</Checkbox>
							</S.ContainerCheckbox>
							<S.ContainerPeriod>
								<S.ContainerCheckbox>
									<Checkbox checked disabled>Manhã</Checkbox>
									</S.ContainerCheckbox>
									<S.ContainerCheckbox>
									<Checkbox checked disabled>Tarde</Checkbox>
									</S.ContainerCheckbox>
									<S.ContainerCheckbox>
									<Checkbox checked disabled>Noite</Checkbox>
								</S.ContainerCheckbox>
							</S.ContainerPeriod>
							<S.Separator><span></span></S.Separator>
							<S.ContainerCheckbox>
								<Checkbox checked disabled>Sexta</Checkbox>
							</S.ContainerCheckbox>
							<S.Separator><span></span></S.Separator>
							<S.ContainerCheckbox>
								<Checkbox checked disabled>Sábado</Checkbox>
							</S.ContainerCheckbox>
						</S.ContainerDays>
						<S.ContainerObs>
						<S.InputCustom height={182}>
							<Input disabled value={""}>Sobre</Input>
							</S.InputCustom>
							<S.InputCustom height={182}>
							<Input disabled value={""}>Observações</Input>
							</S.InputCustom>
						</S.ContainerObs>
						<S.ContainerPlan>
							<p>Plano</p>
							<span>Plano X - R$ 200,00</span>
						</S.ContainerPlan>
					</S.ContainerScroll>
				</S.ContainerContent>
				</S.ContainerAll>
			</S.Body>
	
		</>
	)
}
export default DetailedUser