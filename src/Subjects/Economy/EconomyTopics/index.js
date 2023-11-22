import Banking from '../Banking';
import EconomyGeneral from '../EconomyGeneral';
import BankingPart2 from '../BankingPart2';
import BaselNorms from '../BaselNorms';

const EconomyTopics = [
	{
		topicId: 'banking',
		questions: Banking,
	},
	{
		topicId: 'ecogen',
		questions: EconomyGeneral,
	},
	{
		topicId: 'banking2',
		questions: BankingPart2,
	},
	{
		topicId: 'basel',
		questions: BaselNorms,
	},
];

export default EconomyTopics;
