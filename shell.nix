{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  name = "www-oikonoika-jp";

  packages = [
    nodejs-18_x
  ];
}
