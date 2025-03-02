import {
	AnyCSSValue,
	CSSBlock,
	CSSKeyframe,
	CSSMediaQueryList,
	NodeBaseWithComments,
} from "@internal/ast";
import {createBuilder} from "../../utils";

export interface CSSAtRule extends NodeBaseWithComments {
	readonly type: "CSSAtRule";
	readonly name: string;
	readonly prelude: AnyCSSValue[];
	readonly block?: CSSBlock | CSSKeyframe | CSSMediaQueryList;
}
export const cssAtRule = createBuilder<CSSAtRule>(
	"CSSAtRule",
	{
		bindingKeys: {},
		visitorKeys: {
			block: true,
			prelude: true,
		},
	},
);
