import { useState } from 'react'
import styled from 'styled-components'

// -- Styled Components - Formulário --
const FormContainer = styled.section`
  background-color: #f5f5f5;
  padding: 40px 32px;
`

const FormContainerr = styled.form`
  max-width: 1000px;
  margin: 0 auto;
`

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 1;
`

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.6rem;
  text-transform: uppercase;
  color: #555555;
`

const FormInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4caf50;
  }

  &::placeholder {
    color: #999999;
  }
`

const FormSelect = styled.select`
  padding: 10px 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4caf50;
  }
`

const FormButton = styled.button`
  padding: 10px 28px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #388e3c;
  }
`

// -- Props --
type FormularioProps = {
  filtro: string
}

// -- Componente --
const FormVagas = ({ onBuscar }: { onBuscar?: (filtro: string) => void }) => {
  const [cargo, setCargo] = useState('')
  const [nivel, setNivel] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onBuscar && onBuscar(cargo)
  }

  return (
    <FormContainer>
      <FormContainerr onSubmit={handleSubmit}>
        <FormWrap>
          <FormLabel>Cargo</FormLabel>
          <FormInput
            type="text"
            placeholder="Ex: Desenvolvedor React"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </FormWrap>
        <FormWrap>
          <FormLabel>Nível</FormLabel>
          <FormSelect value={nivel} onChange={(e) => setNivel(e.target.value)}>
            <option value="">Todos</option>
            <option value="Junior">Júnior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Sênior</option>
          </FormSelect>
        </FormWrap>
        <FormButton type="submit">Buscar</FormButton>
      </FormContainerr>
    </FormContainer>
  )
}

export default FormVagas
