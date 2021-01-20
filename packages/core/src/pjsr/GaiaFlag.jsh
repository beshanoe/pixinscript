//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/GaiaFlag.jsh - Released 2020-12-12T20:55:24Z
// ----------------------------------------------------------------------------
// This file is part of the PixInsight JavaScript Runtime (PJSR).
// PJSR is an ECMA-262-5 compliant framework for development of scripts on the
// PixInsight platform.
//
// Copyright (c) 2003-2020 Pleiades Astrophoto S.L. All Rights Reserved.
//
// Redistribution and use in both source and binary forms, with or without
// modification, is permitted provided that the following conditions are met:
//
// 1. All redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//
// 2. All redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
// 3. Neither the names "PixInsight" and "Pleiades Astrophoto", nor the names
//    of their contributors, may be used to endorse or promote products derived
//    from this software without specific prior written permission. For written
//    permission, please contact info@pixinsight.com.
//
// 4. All products derived from this software, in any form whatsoever, must
//    reproduce the following acknowledgment in the end-user documentation
//    and/or other materials provided with the product:
//
//    "This product is based on software from the PixInsight project, developed
//    by Pleiades Astrophoto and its contributors (https://pixinsight.com/)."
//
//    Alternatively, if that is where third-party acknowledgments normally
//    appear, this acknowledgment must be reproduced in the product itself.
//
// THIS SOFTWARE IS PROVIDED BY PLEIADES ASTROPHOTO AND ITS CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL PLEIADES ASTROPHOTO OR ITS
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, BUSINESS
// INTERRUPTION; PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; AND LOSS OF USE,
// DATA OR PROFITS) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// ----------------------------------------------------------------------------

#ifndef __PJSR_GaiaFlag_jsh
#define __PJSR_GaiaFlag_jsh

/*
 * Gaia XPSD Source Flags
 *
 * N.B. These flags must have identical values to those of their counterparts
 * defined in the pcl::GaiaStarFlag namespace (see pcl/GaiaDatabaseFile.h).
 */

#define GaiaFlag_NoPM               0x00000001
#define GaiaFlag_NoGBPMag           0x00000002
#define GaiaFlag_NoGRPMag           0x00000004
#define GaiaFlag_LackingData        0x00000007

#define GaiaFlag_GoldRA             0x00000010
#define GaiaFlag_GoldDec            0x00000020
#define GaiaFlag_GoldPMRA           0x00000040
#define GaiaFlag_GoldPMDec          0x00000080

#define GaiaFlag_SilverRA           0x00000100
#define GaiaFlag_SilverDec          0x00000200
#define GaiaFlag_SilverPMRA         0x00000400
#define GaiaFlag_SilverPMDec        0x00000800

#define GaiaFlag_BronzeRA           0x00001000
#define GaiaFlag_BronzeDec          0x00002000
#define GaiaFlag_BronzePMRA         0x00004000
#define GaiaFlag_BronzePMDec        0x00008000

#define GaiaFlag_GoldGMag           0x00010000
#define GaiaFlag_GoldGBPMag         0x00020000
#define GaiaFlag_GoldGRPMag         0x00040000
#define GaiaFlag_GoldParx           0x00080000

#define GaiaFlag_SilverGMag         0x00100000
#define GaiaFlag_SilverGBPMag       0x00200000
#define GaiaFlag_SilverGRPMag       0x00400000
#define GaiaFlag_SilverParx         0x00800000

#define GaiaFlag_BronzeGMag         0x01000000
#define GaiaFlag_BronzeGBPMag       0x02000000
#define GaiaFlag_BronzeGRPMag       0x04000000
#define GaiaFlag_BronzeParx         0x08000000

#define GaiaFlag_BPRPExcess         0x10000008
#define GaiaFlag_BPRPExcessHigh     0x20000000

#define GaiaFlag_GoldAstrometry     0x000800F0
#define GaiaFlag_SilverAstrometry   0x00800F00
#define GaiaFlag_BronzeAstrometry   0x0800F000
#define GaiaFlag_GoodAstrometry     0x0888FFF0

#define GaiaFlag_GoldPhotometry     0x00070000
#define GaiaFlag_SilverPhotometry   0x00700000
#define GaiaFlag_BronzePhotometry   0x07000000
#define GaiaFlag_GoodPhotometry     0x07770000

#endif   // __PJSR_GaiaFlag_jsh

// ----------------------------------------------------------------------------
// EOF pjsr/GaiaFlag.jsh - Released 2020-12-12T20:55:24Z
