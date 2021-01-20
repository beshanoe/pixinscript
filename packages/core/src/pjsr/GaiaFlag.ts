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

/*
 * Gaia XPSD Source Flags
 *
 * N.B. These flags must have identical values to those of their counterparts
 * defined in the pcl::GaiaStarFlag namespace (see pcl/GaiaDatabaseFile.h).
 */

export const GaiaFlag_NoPM = 0x00000001;
export const GaiaFlag_NoGBPMag = 0x00000002;
export const GaiaFlag_NoGRPMag = 0x00000004;
export const GaiaFlag_LackingData = 0x00000007;

export const GaiaFlag_GoldRA = 0x00000010;
export const GaiaFlag_GoldDec = 0x00000020;
export const GaiaFlag_GoldPMRA = 0x00000040;
export const GaiaFlag_GoldPMDec = 0x00000080;

export const GaiaFlag_SilverRA = 0x00000100;
export const GaiaFlag_SilverDec = 0x00000200;
export const GaiaFlag_SilverPMRA = 0x00000400;
export const GaiaFlag_SilverPMDec = 0x00000800;

export const GaiaFlag_BronzeRA = 0x00001000;
export const GaiaFlag_BronzeDec = 0x00002000;
export const GaiaFlag_BronzePMRA = 0x00004000;
export const GaiaFlag_BronzePMDec = 0x00008000;

export const GaiaFlag_GoldGMag = 0x00010000;
export const GaiaFlag_GoldGBPMag = 0x00020000;
export const GaiaFlag_GoldGRPMag = 0x00040000;
export const GaiaFlag_GoldParx = 0x00080000;

export const GaiaFlag_SilverGMag = 0x00100000;
export const GaiaFlag_SilverGBPMag = 0x00200000;
export const GaiaFlag_SilverGRPMag = 0x00400000;
export const GaiaFlag_SilverParx = 0x00800000;

export const GaiaFlag_BronzeGMag = 0x01000000;
export const GaiaFlag_BronzeGBPMag = 0x02000000;
export const GaiaFlag_BronzeGRPMag = 0x04000000;
export const GaiaFlag_BronzeParx = 0x08000000;

export const GaiaFlag_BPRPExcess = 0x10000008;
export const GaiaFlag_BPRPExcessHigh = 0x20000000;

export const GaiaFlag_GoldAstrometry = 0x000800f0;
export const GaiaFlag_SilverAstrometry = 0x00800f00;
export const GaiaFlag_BronzeAstrometry = 0x0800f000;
export const GaiaFlag_GoodAstrometry = 0x0888fff0;

export const GaiaFlag_GoldPhotometry = 0x00070000;
export const GaiaFlag_SilverPhotometry = 0x00700000;
export const GaiaFlag_BronzePhotometry = 0x07000000;
export const GaiaFlag_GoodPhotometry = 0x07770000;

// ----------------------------------------------------------------------------
// EOF pjsr/GaiaFlag.jsh - Released 2020-12-12T20:55:24Z
