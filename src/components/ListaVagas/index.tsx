import styled from 'styled-components'
import Vaga from '../Vaga'
import { VagaType } from '../../types'

// ── Styled Components — ListaVagas ──
const ListaSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
`

const ListaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
`

const ListaTitulo = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f1f1f;
`

const ListaContagem = styled.span`
  font-size: 0.85rem;
  color: #888888;
`

const ListaGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const ListaItem = styled.li``

const SemResultados = styled.p`
  text-align: center;
  color: #888888;
  padding: 40px 0;
  grid-column: 1 / -1;
`

// ── Dados mockados ──
const vagas: VagaType[] = [
  {
    id: 1,
    cargo: 'Desenvolvedor Front-end React',
    descricao: 'Vaga para dev React com TypeScript e Styled Components em time de produto.',
    nivel: 'Pleno',
    salario: 'R$ 8.000 – 12.000',
    regime: 'Remoto',
  },
  {
    id: 2,
    cargo: 'UI/UX Designer',
    descricao: 'Designer para criar interfaces e design systems usando Figma.',
    nivel: 'Júnior',
    salario: 'R$ 5.000 – 8.000',
    regime: 'Híbrido',
  },
  {
    id: 3,
    cargo: 'Desenvolvedor Full Stack',
    descricao: 'Full Stack com Node.js e React para projetos de clientes nacionais.',
    nivel: 'Pleno',
    salario: 'R$ 10.000 – 14.000',
    regime: 'Híbrido',
  },
  {
    id: 4,
    cargo: 'Engenheiro de Software Sênior',
    descricao: 'Liderança técnica em arquitetura de microsserviços e alta disponibilidade.',
    nivel: 'Sênior',
    salario: 'R$ 18.000 – 25.000',
    regime: 'Remoto',
  },
  {
    id: 5,
    cargo: 'Dev Mobile React Native',
    descricao: 'Desenvolvimento de apps iOS e Android com React Native e Expo.',
    nivel: 'Pleno',
    salario: 'R$ 9.000 – 13.000',
    regime: 'Remoto',
  },
  {
    id: 6,
    cargo: 'Analista DevOps',
    descricao: 'Gerenciamento de pipelines CI/CD e infraestrutura em nuvem.',
    nivel: 'Sênior',
    salario: 'R$ 12.000 – 18.000',
    regime: 'Presencial',
  },
]

// ── Props ──
type ListaVagasProps = {
  filtro: string
}

// ── Componente ──
const ListaVagas = ({ filtro }: ListaVagasProps) => {
  const vagasFiltradas = filtro
    ? vagas.filter((v) =>
        v.cargo.toLowerCase().includes(filtro.toLowerCase())
      )
    : vagas

  return (
    <ListaSection>
      <ListaHeader>
        <ListaTitulo>Vagas disponíveis</ListaTitulo>
        <ListaContagem>{vagasFiltradas.length} vaga(s) encontrada(s)</ListaContagem>
      </ListaHeader>

      <ListaGrid>
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((vaga) => (
            <ListaItem key={vaga.id}>
              <Vaga vaga={vaga} />
            </ListaItem>
          ))
        ) : (
          <SemResultados>Nenhuma vaga encontrada para "{filtro}".</SemResultados>
        )}
      </ListaGrid>
    </ListaSection>
  )
}

export default ListaVagas
