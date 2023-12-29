import Banking from '../Banking';
import EconomyGeneral from '../EconomyGeneral';
import BankingPart2 from '../BankingPart2';
import BaselNorms from '../BaselNorms';
import MonetaryPolicy from '../MonetaryPolicy';
import Agriculture from '../Agriculture';
import AgricultureII from '../AgricultureII';

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
	{
		topicId: 'monetarypolicy',
		questions: MonetaryPolicy,
	},
	{
		topicId: 'agriculture',
		questions: Agriculture,
	},
	{
		topicId: 'agricultureII',
		questions: AgricultureII,
	},

];

export default EconomyTopics;
