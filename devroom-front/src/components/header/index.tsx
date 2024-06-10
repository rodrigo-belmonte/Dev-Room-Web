import * as React from "react";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";

type Page = {
  id: number;
  name: string;
  route: string;
};

const pages: Page[] = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
];

const settings = [
  {
    id: 1,
    name: "Profile",
    route: "/profile",
  },
  {
    id: 2,
    name: "Manage Posts",
    route: "/profile/myPosts",
  },
  {
    id: 3,
    name: "Manage Tags",
    route: "/profile/tags",
  },
  {
    id: 3,
    name: "Manage Tips",
    route: "/profile/tips",
  },
];

function Header() {
  const router = useRouter();

  if (router.pathname.startsWith("/profile/myPosts/")) return null;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl">
      <Box >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            <img src="/DevRoom-Black.svg" alt="logo" className={styles.logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link href={page.route} key={page.id}>
                  <Typography
                    fontWeight={"bold"}
                    textAlign="center"
                    color={"#CA8114"}
                  >
                    {page.name}
                  </Typography>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            <img src="/DevRoom-Black.svg" alt="logo" className={styles.logo} />
          </Typography>

          <SearchBox />

          <Box sx={{ flexGrow: 0 }}>
            <Link href="/profile/myPosts/new">
              <Button
                className="buttonCreatePost"
                variant="outlined"
                sx={{ mr: 1 }}
                color="success"
              >
                Create Post
              </Button>
            </Link>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link href={setting.route} key={setting.route}>
                  <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

function SearchBox() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <TextField
        id="input-with-icon-adornment"
        variant="outlined"
        sx={{ background: "white", width:400, py:1 }}
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Header;
