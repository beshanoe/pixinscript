# @pixinscript/cli

## 0.3.1

### Patch Changes

- Made build command output verbose error

## 0.3.0

### Minor Changes

- Add --no-zip flag and separate zip command for flexible script packaging

  - Add --no-zip flag to build command for scripts requiring separate code signing
  - Add new 'zip' command to create ZIP archives with configurable filename and internal path structure
  - Replace webpack-based ZIP creation with archiver library for better performance
  - Support for signing workflow: build → sign → zip

## 0.2.1

### Patch Changes

- fix possible memory leaks
- Updated dependencies
  - @pixinscript/core@0.2.1
  - @pixinscript/ui@0.2.1
  - @pixinscript/webpack-plugin@0.2.1

## 0.2.0

### Patch Changes

- Updated all global types
- Updated dependencies [12ee1c4]
- Updated dependencies
  - @pixinscript/core@0.2.0
  - @pixinscript/ui@0.2.0
  - @pixinscript/webpack-plugin@0.2.0

## 0.1.3

### Patch Changes

- Introduce example projects
- Updated dependencies
  - @pixinscript/core@0.1.2
  - @pixinscript/ui@0.1.2
  - @pixinscript/webpack-plugin@0.1.3

## 0.1.2

### Patch Changes

- Fix webpack version
- Updated dependencies
  - @pixinscript/webpack-plugin@0.1.2

## 0.1.1

### Patch Changes

- Make tsconfig public and fix residual pixinsight names
- Updated dependencies
  - @pixinscript/core@0.1.1
  - @pixinscript/ui@0.1.1
  - @pixinscript/webpack-plugin@0.1.1

## 0.1.0

### Minor Changes

- 466111f: Renamed to pixinscript to avoid confusion

### Patch Changes

- Updated dependencies [466111f]
  - @pixinscript/core@0.1.0
  - @pixinscript/ui@0.1.0
  - @pixinscript/webpack-plugin@0.1.0

## 0.0.3

### Patch Changes

- Moved to turborepo, better organized packages, added cli tool
- Updated dependencies
  - @pixinscript/core@0.0.3
  - @pixinscript/ui@0.0.3
  - @pixinscript/webpack-plugin@0.0.3
