import { useState } from 'react'
import styled from 'styled-components'

// ── Styled Components — Formulario ──
const FormSection = styled.section`
  background-color: #ffffff;
  padding: 24px 32px;
  border-bottom: 1px solid #e0e0e0;
`

const FormContainer = styled.form`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  align-items: flex-end;
  flex-wrap: wrap;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 180px;
`

const FormLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #555555;
`

const FormInput = styled.input`
  padding: 10px 14px;
  border: 1.5px solid #dddddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4caf50;
  }

  &::placeholder {
    color: #bbbbbb;
  }
`

const FormSelect = styled.select`
  padding: 10px 14px;
  border: 1.5px solid #dddddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
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
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #388e3c;
  }
`

// ── Props ──
type FormularioProps = {
  onBuscar: (termo: string) => void
}

// ── Componente ──
const Formulario = ({ onBuscar }: FormularioProps) => {
  const [cargo, setCargo] = useState('')
  const [nivel, setNivel] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onBuscar(cargo)
  }

  return (
    <FormSection>
      <FormContainer onSubmit={handleSubmit}>

        <FormGroup>
          <FormLabel htmlFor="cargo">Cargo ou tecnologia</FormLabel>
          <FormInput
            id="cargo"
            type="text"
            placeholder="Ex: React, TypeScript..."
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="nivel">Nível</FormLabel>
          <FormSelect
            id="nivel"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
          >
            <option value="">Todos os níveis</option>
            <option value="junior">Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior</option>
          </FormSelect>
        </FormGroup>

        <FormButton type="submit">Buscar vagas</FormButton>

      </FormContainer>
    </FormSection>
  )
}

export default Formulario
