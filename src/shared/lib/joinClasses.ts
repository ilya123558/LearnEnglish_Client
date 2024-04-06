type TCheckList = [boolean, string, string][]

type TJoinClasses = (classString: string, checkList: TCheckList) => string

export const joinClasses: TJoinClasses = (classString, checkList) => {
	const result = [classString]

	for (const [isValue, joinClassWithValueTrue, joinClassWithValueFalse] of checkList) {
		if (isValue) {
			result.push(joinClassWithValueTrue)
		} else {
      result.push(joinClassWithValueFalse)
		}
	}

	return result.join(' ')
}
