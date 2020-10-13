import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'


getConvictions().then(ConvictionSelect)

CriminalList();