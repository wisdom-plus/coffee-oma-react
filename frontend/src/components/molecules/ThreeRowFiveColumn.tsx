import { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import IconHeader from 'components/atoms/IconHeader';

const ThreeRowFiveColumn: FC = () => (
  <Grid.Row>
    <Grid.Column width={5}>
      <IconHeader
        icontype="coffee"
        content="実際の口コミ"
        subheader="購入者,使用者による口コミで失敗しないアイテム選びをサポート"
      />
    </Grid.Column>
    <Grid.Column width={5}>
      <IconHeader
        icontype="search"
        content="検索機能"
        subheader="気になるアイテム、口コミ、最新ランキングなどが検索可能。"
      />
    </Grid.Column>
    <Grid.Column width={5}>
      <IconHeader
        icontype="comment alternate"
        content="チャット機能"
        subheader="口コミを投稿したユーザーに使用感を直接聞ける。"
      />
    </Grid.Column>
  </Grid.Row>
);

export default ThreeRowFiveColumn;
