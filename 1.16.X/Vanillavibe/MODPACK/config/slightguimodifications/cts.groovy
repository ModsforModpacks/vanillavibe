info("Copyright © 2022 Team CSS. All right reserved.")
mainMenu {
  enabled = true
  splashText {
    enabled = true
    splashesEnabled = false
  }
  background {
    clearBackgrounds()
    backgroundStayLength = 50000 // 50 seconds
    backgroundFadeLength = 2000 // 2 seconds fade
    renderGradientShade = false
    image {
      texture = file("config/modpack/menu/background.png")
    }
  }
  removeMinecraftLogo()
  removeEditionBadge()
  clearAllButtons()
  button {
    position {
      x {
        it / 2 - 101
      }
      y = 131
    }
    width = 204
    height = 20
    text = translatable("menu.singleplayer")
    onClicked = singleplayer()
  }
  button {
    position {
      x {
        it / 2 - 101
      }
      y = 155
    }
    width = 204
    height = 20

    text = translatable("menu.multiplayer")
    onClicked = multiplayer()
  }
  button {
    position {
      x {
        it / 2 + 3
      }
      y = 179
    }
    width = 100
    height = 20

    text = literal("Wikipedia")
    onClicked = url("https://github.com/SZUMASTER/vanillavibe/wiki")
  }
  button {
    position {
      x {
        it / 2 - 101
      }
      y = 179
    }
    width = 100
    height = 20

    text = literal("Source")
    onClicked = url("https://github.com/szumaster/vanillavibe/tree/1.16.5")
  }
  button {
    position {
      x {
        it / 2 - 101
      }
      y = 203
    }
    width = 100
    height = 20

    text = literal("Languages")
    onClicked = language()
  }
  button {
    position {
      x {
        it / 2 + 3
      }
      y = 203
    }
    width = 100
    height = 20

    text = literal("Mods")
    onClicked = modMenu()
  }
  button {
    position {
      x {
        it / 2 - 101
      }
      y = 227
    }
    width = 100
    height = 20

    text = translatable("menu.options")
    onClicked = options()
  }
  button {
    position {
      x {
        it / 2 + 3
      }
      y = 227
    }
    width = 100
    height = 20

    text = translatable("menu.quit")
    onClicked = exit()
  }
}