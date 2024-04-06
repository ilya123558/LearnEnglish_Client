export type TCategories = string[]

export type TDataItem = {
	en: string[]
	ru: string[]
}

export type TDataList = TDataItem[]

export type TCheckWordByCategory = {
	category: string
	language: string
	translatedWord: string
	word: string
}
