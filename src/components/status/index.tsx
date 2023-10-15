import StatusCard from '../statuscard'
import * as S from './styles'

type StatusProps = {
	type: "MEDICOS" | "CONTRATANTES"
	n1: number
	n2: number
	n3: number
}

function Status({type, n1, n2, n3}: StatusProps){
	return(
		<S.Body>
		<h1>{type == 'MEDICOS' ? 'Médicos' : 'Contratantes'}</h1>
		<S.ContainerCards>
		<StatusCard number={1} type={type} data={n1}></StatusCard>
		<StatusCard number={2} type={type} data={n2}></StatusCard>
		<StatusCard number={3} type={type} data={n3}></StatusCard>
		</S.ContainerCards>
		</S.Body>
	)
}
export default Status