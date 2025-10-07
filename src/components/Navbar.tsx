"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useTheme, alpha } from "@mui/material/styles";
import { useColorMode } from "../theme/ColorModeProvider";

export default function Navbar() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.24)" // more visible in dark mode
            : "rgba(0,0,0,0.16)", // more visible in light mode
        boxShadow: (theme) =>
          theme.palette.mode === "light"
            ? "0 2px 8px rgba(0,0,0,0.10)"
            : "0 6px 16px rgba(0,0,0,0.70), inset 0 1px 0 rgba(255,255,255,0.06)",
        backdropFilter: "saturate(180%) blur(6px)",
        "&:after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? alpha(theme.palette.primary.main, 0.3)
              : "transparent",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? `0 0 6px ${alpha(theme.palette.primary.main, 0.6)}`
              : "none",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" disableGutters className="px-4 sm:px-6">
        <Toolbar disableGutters sx={{ minHeight: 72 }}> 
          {/* Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Avatar
              sx={{ bgcolor: "#111827", width: 32, height: 32 }}
              variant="circular"
            >
              <BrushRoundedIcon
                fontSize="small"
                sx={{ color: theme.palette.mode === "dark" ? "#fff" : undefined }}
              />
            </Avatar>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                letterSpacing: 0.2,
              }}
            >
              Excalidraw
            </Typography>
          </Box>

          {/* Right side nav */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              component={Link}
              href="/"
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderRadius: 1.5,
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.08)",
                },
              }}
              startIcon={<HomeOutlinedIcon fontSize="small" />}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/signin"
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderRadius: 1.5,
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.08)",
                },
              }}
            >
              Sign In
            </Button>
            <Button
              component={Link}
              href="/signup"
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.dark
                      : undefined,
                  boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                },
              }}
            >
              Sign Up
            </Button>
            <Tooltip title={mode === "dark" ? "Switch to light" : "Switch to dark"}>
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                aria-label="toggle theme"
                sx={{
                  borderRadius: 2,
                  transition: "background-color 120ms ease, box-shadow 120ms ease",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? "rgba(0,0,0,0.08)"
                        : "rgba(255,255,255,0.08)",
                    boxShadow: (theme) =>
                      theme.palette.mode === "light"
                        ? "0 2px 6px rgba(0,0,0,0.15)"
                        : "none",
                  },
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeOutlinedIcon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


