# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > calc-division`

```javascript
CSSRoot {
	body: [
		CSSRule {
			prelude: [
				CSSSelector {
					patterns: [
						CSSClassSelector {
							value: "style"
							loc: SourceLocation invalid/calc-division/input.css 1:0-1:6
						}
					]
					loc: SourceLocation invalid/calc-division/input.css 1:0-1:7
				}
			]
			block: CSSBlock {
				value: [
					CSSDeclaration {
						name: "width"
						value: [
							CSSCalcFunction {
								name: "calc"
								params: [
									CSSCalcSum {
										value: [
											CSSCalcProduct {
												value: [
													CSSCalcValue {
														value: CSSDimension {
															value: 2
															unit: "px"
															loc: SourceLocation invalid/calc-division/input.css 2:13-2:13
														}
														loc: SourceLocation invalid/calc-division/input.css 2:13-2:16
													}
												]
												loc: SourceLocation invalid/calc-division/input.css 2:16-2:17
											}
										]
										loc: SourceLocation invalid/calc-division/input.css 2:13-2:17
									}
								]
								loc: SourceLocation invalid/calc-division/input.css 2:13-2:20
							}
							CSSRaw {
								loc: SourceLocation invalid/calc-division/input.css 2:20-2:21
							}
						]
						important: false
						loc: SourceLocation invalid/calc-division/input.css 2:1-2:21
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation invalid/calc-division/input.css 1:7-3:1
			}
			loc: SourceLocation invalid/calc-division/input.css 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<css>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "css"
				message: RAW_MARKUP {value: "Incorrect character, expected a number or a parenthesis."}
			}
			location: {
				language: "css"
				path: RelativePath<invalid/calc-division/input.css>
				end: Position 2:20
				start: Position 2:17
			}
		}
	]
	path: RelativePath<invalid/calc-division/input.css>
	loc: SourceLocation invalid/calc-division/input.css 1:0-3:1
}
```
