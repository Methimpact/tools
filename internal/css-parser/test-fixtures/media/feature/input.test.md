# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `media > feature`

```javascript
CSSRoot {
	body: [
		CSSAtRule {
			name: "media"
			prelude: [
				CSSMediaQueryList {
					value: [
						CSSMediaQuery {
							value: CSSMediaType {
								value: "screen"
								loc: SourceLocation media/feature/input.css 1:7-1:13
							}
							conditionWithoutOr: CSSMediaConditionWithoutOr {
								value: [
									CSSMediaInParens {
										value: CSSMediaFeature {
											value: CSSMediaFeatureBoolean {
												value: "color"
												loc: SourceLocation media/feature/input.css 1:19-1:24
											}
											loc: SourceLocation media/feature/input.css 1:19-1:24
										}
										loc: SourceLocation media/feature/input.css 1:18-1:25
									}
								]
								loc: SourceLocation media/feature/input.css 1:14-1:26
							}
							loc: SourceLocation media/feature/input.css 1:6-1:26
						}
					]
					loc: SourceLocation media/feature/input.css 1:6-1:26
				}
			]
			block: CSSBlock {
				value: []
				startingTokenValue: "{"
				loc: SourceLocation media/feature/input.css 1:26-1:28
			}
			loc: SourceLocation media/feature/input.css 1:0-1:28
		}
		CSSAtRule {
			name: "media"
			prelude: [
				CSSMediaQueryList {
					value: [
						CSSMediaQuery {
							condition: "only"
							value: CSSMediaType {
								value: "screen"
								loc: SourceLocation media/feature/input.css 2:12-2:18
							}
							conditionWithoutOr: CSSMediaConditionWithoutOr {
								value: [
									CSSMediaInParens {
										value: CSSMediaFeature {
											value: CSSMediaFeatureBoolean {
												value: "color"
												loc: SourceLocation media/feature/input.css 2:24-2:29
											}
											loc: SourceLocation media/feature/input.css 2:24-2:29
										}
										loc: SourceLocation media/feature/input.css 2:23-2:30
									}
								]
								loc: SourceLocation media/feature/input.css 2:19-2:31
							}
							loc: SourceLocation media/feature/input.css 2:6-2:31
						}
					]
					loc: SourceLocation media/feature/input.css 2:6-2:31
				}
			]
			block: CSSBlock {
				value: []
				startingTokenValue: "{"
				loc: SourceLocation media/feature/input.css 2:31-2:33
			}
			loc: SourceLocation media/feature/input.css 2:0-2:33
		}
		CSSAtRule {
			name: "media"
			prelude: [
				CSSMediaQueryList {
					value: [
						CSSMediaQuery {
							condition: "only"
							value: CSSMediaType {
								value: "screen"
								loc: SourceLocation media/feature/input.css 3:12-3:18
							}
							conditionWithoutOr: CSSMediaConditionWithoutOr {
								value: [
									CSSMediaInParens {
										value: CSSMediaFeature {
											value: CSSMediaFeaturePlain {
												name: CSSMediaFeatureName {
													value: "min-width"
													loc: SourceLocation media/feature/input.css 3:24-3:33
												}
												value: CSSMediaFeatureValue {
													value: CSSDimension {
														value: 800
														unit: "px"
														loc: SourceLocation media/feature/input.css 3:35-3:40
													}
													loc: SourceLocation media/feature/input.css 3:35-3:40
												}
												loc: SourceLocation media/feature/input.css 3:24-3:40
											}
											loc: SourceLocation media/feature/input.css 3:24-3:40
										}
										loc: SourceLocation media/feature/input.css 3:23-3:41
									}
								]
								loc: SourceLocation media/feature/input.css 3:19-3:42
							}
							loc: SourceLocation media/feature/input.css 3:6-3:42
						}
					]
					loc: SourceLocation media/feature/input.css 3:6-3:42
				}
			]
			block: CSSBlock {
				value: []
				startingTokenValue: "{"
				loc: SourceLocation media/feature/input.css 3:42-3:44
			}
			loc: SourceLocation media/feature/input.css 3:0-3:44
		}
		CSSAtRule {
			name: "media"
			prelude: [
				CSSMediaQueryList {
					value: [
						CSSMediaQuery {
							value: CSSMediaType {
								value: "screen"
								loc: SourceLocation media/feature/input.css 4:7-4:13
							}
							conditionWithoutOr: CSSMediaConditionWithoutOr {
								value: [
									CSSMediaInParens {
										value: CSSMediaFeature {
											value: CSSMediaFeaturePlain {
												name: CSSMediaFeatureName {
													value: "min-width"
													loc: SourceLocation media/feature/input.css 4:19-4:35
												}
												value: CSSMediaFeatureValue {
													value: CSSDimension {
														value: 800
														unit: "px"
														loc: SourceLocation media/feature/input.css 4:46-4:51
													}
													loc: SourceLocation media/feature/input.css 4:46-4:51
												}
												loc: SourceLocation media/feature/input.css 4:19-4:51
											}
											loc: SourceLocation media/feature/input.css 4:19-4:51
										}
										loc: SourceLocation media/feature/input.css 4:18-4:60
									}
								]
								loc: SourceLocation media/feature/input.css 4:14-4:61
							}
							loc: SourceLocation media/feature/input.css 4:6-4:61
						}
					]
					loc: SourceLocation media/feature/input.css 4:6-4:61
				}
			]
			block: CSSBlock {
				value: []
				startingTokenValue: "{"
				loc: SourceLocation media/feature/input.css 4:61-4:63
			}
			loc: SourceLocation media/feature/input.css 4:0-4:63
		}
		CSSAtRule {
			name: "media"
			prelude: [
				CSSMediaQueryList {
					value: [
						CSSMediaQuery {
							value: CSSMediaType {
								value: "screen"
								loc: SourceLocation media/feature/input.css 5:7-5:13
							}
							conditionWithoutOr: CSSMediaConditionWithoutOr {
								value: [
									CSSMediaInParens {
										value: CSSMediaFeature {
											value: CSSMediaFeaturePlain {
												name: CSSMediaFeatureName {
													value: "min-width"
													loc: SourceLocation media/feature/input.css 5:19-5:28
												}
												value: CSSMediaFeatureValue {
													value: CSSDimension {
														value: 800
														unit: "px"
														loc: SourceLocation media/feature/input.css 5:30-5:35
													}
													loc: SourceLocation media/feature/input.css 5:30-5:35
												}
												loc: SourceLocation media/feature/input.css 5:19-5:35
											}
											loc: SourceLocation media/feature/input.css 5:19-5:35
										}
										loc: SourceLocation media/feature/input.css 5:18-5:36
									}
									CSSMediaAnd {
										value: CSSMediaInParens {
											value: CSSMediaFeature {
												value: CSSMediaFeaturePlain {
													name: CSSMediaFeatureName {
														value: "min-width"
														loc: SourceLocation media/feature/input.css 5:42-5:51
													}
													value: CSSMediaFeatureValue {
														value: CSSDimension {
															value: 800
															unit: "px"
															loc: SourceLocation media/feature/input.css 5:53-5:58
														}
														loc: SourceLocation media/feature/input.css 5:53-5:58
													}
													loc: SourceLocation media/feature/input.css 5:42-5:58
												}
												loc: SourceLocation media/feature/input.css 5:42-5:58
											}
											loc: SourceLocation media/feature/input.css 5:41-5:59
										}
										loc: SourceLocation media/feature/input.css 5:37-5:59
									}
									CSSMediaAnd {
										value: CSSMediaInParens {
											value: CSSMediaFeature {
												value: CSSMediaFeaturePlain {
													name: CSSMediaFeatureName {
														value: "min-width"
														loc: SourceLocation media/feature/input.css 5:65-5:74
													}
													value: CSSMediaFeatureValue {
														value: CSSDimension {
															value: 800
															unit: "px"
															loc: SourceLocation media/feature/input.css 5:76-5:81
														}
														loc: SourceLocation media/feature/input.css 5:76-5:81
													}
													loc: SourceLocation media/feature/input.css 5:65-5:81
												}
												loc: SourceLocation media/feature/input.css 5:65-5:81
											}
											loc: SourceLocation media/feature/input.css 5:64-5:82
										}
										loc: SourceLocation media/feature/input.css 5:60-5:82
									}
								]
								loc: SourceLocation media/feature/input.css 5:14-5:83
							}
							loc: SourceLocation media/feature/input.css 5:6-5:83
						}
					]
					loc: SourceLocation media/feature/input.css 5:6-5:83
				}
			]
			block: CSSBlock {
				value: []
				startingTokenValue: "{"
				loc: SourceLocation media/feature/input.css 5:83-5:85
			}
			loc: SourceLocation media/feature/input.css 5:0-5:85
		}
		CSSAtRule {
			name: "media"
			prelude: [
				CSSMediaQueryList {
					value: [
						CSSMediaQuery {
							value: CSSMediaType {
								value: "screen"
								loc: SourceLocation media/feature/input.css 6:7-6:13
							}
							conditionWithoutOr: CSSMediaConditionWithoutOr {
								value: [
									CSSMediaInParens {
										value: CSSMediaFeature {
											value: CSSMediaFeaturePlain {
												name: CSSMediaFeatureName {
													value: "min-width"
													loc: SourceLocation media/feature/input.css 6:19-6:28
												}
												value: CSSMediaFeatureValue {
													value: CSSDimension {
														value: 800
														unit: "px"
														loc: SourceLocation media/feature/input.css 6:30-6:35
													}
													loc: SourceLocation media/feature/input.css 6:30-6:35
												}
												loc: SourceLocation media/feature/input.css 6:19-6:35
											}
											loc: SourceLocation media/feature/input.css 6:19-6:35
										}
										loc: SourceLocation media/feature/input.css 6:18-6:36
									}
									CSSMediaAnd {
										value: CSSMediaInParens {
											value: CSSMediaFeature {
												value: CSSMediaFeaturePlain {
													name: CSSMediaFeatureName {
														value: "min-width"
														loc: SourceLocation media/feature/input.css 6:42-6:51
													}
													value: CSSMediaFeatureValue {
														value: CSSDimension {
															value: 800
															unit: "px"
															loc: SourceLocation media/feature/input.css 6:53-6:58
														}
														loc: SourceLocation media/feature/input.css 6:53-6:58
													}
													loc: SourceLocation media/feature/input.css 6:42-6:58
												}
												loc: SourceLocation media/feature/input.css 6:42-6:58
											}
											loc: SourceLocation media/feature/input.css 6:41-6:59
										}
										loc: SourceLocation media/feature/input.css 6:37-6:59
									}
									CSSMediaAnd {
										value: CSSMediaInParens {
											value: CSSMediaFeature {
												value: CSSMediaFeaturePlain {
													name: CSSMediaFeatureName {
														value: "min-width"
														loc: SourceLocation media/feature/input.css 6:65-6:74
													}
													value: CSSMediaFeatureValue {
														value: CSSDimension {
															value: 800
															unit: "px"
															loc: SourceLocation media/feature/input.css 6:76-6:81
														}
														loc: SourceLocation media/feature/input.css 6:76-6:81
													}
													loc: SourceLocation media/feature/input.css 6:65-6:81
												}
												loc: SourceLocation media/feature/input.css 6:65-6:81
											}
											loc: SourceLocation media/feature/input.css 6:64-6:82
										}
										loc: SourceLocation media/feature/input.css 6:60-6:82
									}
									CSSMediaAnd {
										value: CSSMediaInParens {
											value: CSSMediaFeature {
												value: CSSMediaFeaturePlain {
													name: CSSMediaFeatureName {
														value: "min-width"
														loc: SourceLocation media/feature/input.css 6:88-6:97
													}
													value: CSSMediaFeatureValue {
														value: CSSDimension {
															value: 800
															unit: "px"
															loc: SourceLocation media/feature/input.css 6:99-6:104
														}
														loc: SourceLocation media/feature/input.css 6:99-6:104
													}
													loc: SourceLocation media/feature/input.css 6:88-6:104
												}
												loc: SourceLocation media/feature/input.css 6:88-6:104
											}
											loc: SourceLocation media/feature/input.css 6:87-6:105
										}
										loc: SourceLocation media/feature/input.css 6:83-6:105
									}
								]
								loc: SourceLocation media/feature/input.css 6:14-6:105
							}
							loc: SourceLocation media/feature/input.css 6:6-6:105
						}
					]
					loc: SourceLocation media/feature/input.css 6:6-6:105
				}
			]
			block: CSSBlock {
				value: []
				startingTokenValue: "{"
				loc: SourceLocation media/feature/input.css 6:105-6:107
			}
			loc: SourceLocation media/feature/input.css 6:0-6:107
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	path: RelativePath<media/feature/input.css>
	loc: SourceLocation media/feature/input.css 1:0-6:107
}
```
