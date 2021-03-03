import styled from 'styled-components'
import {COMMON, SystemCommonProps} from './constants'
import sx, {SxProp} from './sx'
import {ComponentProps} from './utils/types'

type StyledDetailsProps = SystemCommonProps & SxProp

const Details = styled.details<StyledDetailsProps>`
  & > summary {
    list-style: none;
  }
  & > summary::-webkit-details-marker {
    display: none;
  }

  ${COMMON}
  ${sx};
`

Details.displayName = 'Details'

export type DetailsProps = ComponentProps<typeof Details>
export default Details
