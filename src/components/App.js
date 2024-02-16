import React from 'react';
import { CssBaseline, Drawer, AppBar, Toolbar, List, ListItem, ListItemText, Container, Typography, Paper, Grid } from '@mui/material';
import myImg from '../images/my-img.jpg';
import { styled } from '@mui/system';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const drawerWidth = 180;

const StyledContainer = styled(Container)({
  flexGrow: 1,
  padding: (theme) => theme.spacing(3),
});

const ImageContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const TextContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

function Introduction() {
  return (
    <StyledContainer>
      <Typography variant="h5" mb={4} sx={{ fontWeight: 'bold' }}>
        自己紹介
      </Typography>
      <Grid container spacing={3}>
        <TextContainer item xs={12} md={8}>
          <Typography paragraph>
            私はWeb開発者のJohn Doeです。専門はフロントエンド開発で、ReactやMaterial-UIを使ったプロジェクトが得意です。
            過去5年間にわたり、多くのWebアプリケーションやウェブサイトの開発に関わってきました。
            これまでに様々なスタートアップ企業や大手企業のプロジェクトでフロントエンドのリードエンジニアとして活躍し、
            ユーザーエクスペリエンスの向上とビジネス目標の達成に貢献してきました。
          </Typography>
          <Typography paragraph>
            また、過去1年間にわたり、担当したプロジェクトのユーザーエクスペリエンスを向上させるために、
            サイトの読み込み速度を平均30%改善し、ユーザーアクションの変換率を平均20%向上させました。
            これは、パフォーマンスの最適化やユーザーインターフェースの改善に焦点を当て、データに基づいた意思決定を行った結果です。
          </Typography>
          <Typography paragraph>
            私の目標は、常に技術とデザインの最新トレンドを学び、それを実践することで、ユーザーが魅了されるプロダクトを提供することです。
            チームと協力して、ビジョンを実現し、プロジェクトの成功に貢献することを楽しみにしています。
          </Typography>
        </TextContainer>
        <ImageContainer item xs={12} md={4}>
          <img src={myImg} alt="Your Name" style={{ width: '100%', height: 'auto', maxWidth: '500px', border: '2px solid #000' }} />
        </ImageContainer>
      </Grid>
    </StyledContainer>
  );
}

function Skill() {
  return (
    <StyledContainer>
      <Typography variant="h5" mb={4} sx={{ fontWeight: 'bold' }}>
        スキル
      </Typography>
      <Typography paragraph>
        ここにスキルの内容を書いてください。
      </Typography>
    </StyledContainer>
  );
}

function Career() {
  return (
    <StyledContainer>
      <Typography variant="h5" mb={4} sx={{ fontWeight: 'bold' }}>
        キャリア
      </Typography>

      {/* プロジェクト1 */}
      <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold' }}>
          顧客管理システム
        </Typography>
        <Typography paragraph>
          <strong>概要:</strong> 企業の顧客情報を一元管理するためのシステム。顧客の基本情報、取引履歴、サポート履歴などを効率的に管理し、営業チームやカスタマーサポートに情報を提供。
        </Typography>
        <Typography paragraph>
          <strong>担当範囲:</strong> フロントエンドからバックエンドまでの開発。ユーザー認証、データベース設計、クライアントとのインタラクションの実装。
        </Typography>
        <Typography paragraph>
          <strong>言語/FW:</strong> React, Node.js, Express
        </Typography>
        <Typography paragraph>
          <strong>利用ツール:</strong> PostgreSQL, Git, Jira, ESLint, Webpack
        </Typography>
      </Paper>

      {/* プロジェクト2 */}
      <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold' }}>
          在庫管理システム
        </Typography>
        <Typography paragraph>
          <strong>概要:</strong> 倉庫内の商品や資材の在庫状況をリアルタイムで把握し、効率的な在庫管理を支援するシステム。入庫、出庫、棚卸しなどの機能を提供し、生産計画や発注にも連動。
        </Typography>
        <Typography paragraph>
          <strong>担当範囲:</strong> バックエンドの開発とデータベース設計。在庫の更新と監視、注文処理の自動化。
        </Typography>
        <Typography paragraph>
          <strong>言語/FW:</strong> Python, Django,
        </Typography>
        <Typography paragraph>
          <strong>利用ツール:</strong> PostgreSQL, Git, Docker, Swagger
        </Typography>
      </Paper>

      {/* プロジェクト3 */}
      <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold' }}>
          勤怠管理システム
        </Typography>
        <Typography paragraph>
          <strong>概要:</strong> 退勤情報や勤務時間、休暇申請などを管理するシステム。給与計算や労働時間の分析、勤怠データの報告をサポート。
        </Typography>
        <Typography paragraph>
          <strong>担当範囲:</strong> フロントエンドとバックエンドの開発。ユーザー認証、勤怠データの集計と処理。
        </Typography>
        <Typography paragraph>
          <strong>言語/FW:</strong> Vue.js, PHP, Laravel
        </Typography>
        <Typography paragraph>
          <strong>利用ツール:</strong> MySQL, Git, Redmine, PHPUnit
        </Typography>
      </Paper>

      {/* プロジェクト4 */}
      <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold' }}>
          会計ソフトウェア
        </Typography>
        <Typography paragraph>
          <strong>概要:</strong> 企業の経理部門向けに開発された、帳簿管理、経費計算、税務申告などの機能を提供する会計ソフトウェア。法規制への適合性が求められる。
        </Typography>
        <Typography paragraph>
          <strong>担当範囲:</strong> バックエンドの開発とデータベース設計。帳簿の記入と管理、税務処理の自動化。
        </Typography>
        <Typography paragraph>
          <strong>言語/FW:</strong> C#, ASP.NET
        </Typography>
        <Typography paragraph>
          <strong>利用ツール:</strong> SQL Server, Git, Visual Studio, Azure DevOps, NUnit
        </Typography>
      </Paper>
    </StyledContainer>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap>Portfolio Sample</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            <ListItem>
              <Link to="/introduction" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary="自己紹介" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/skill" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary="スキル" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/career" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary="キャリア" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <StyledContainer sx={{ paddingTop: '70px' /* AppBarの高さ */ }}>
          <Route exact path="/" component={Introduction} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/career" component={Career} />
          <Route path="/skill" component={Skill} />
        </StyledContainer>
      </div>
    </Router>
  );
}

export default App;
