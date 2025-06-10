---
sidebar_position: 1
---

# SukiSU Ultra

Android device root solution based on [KernelSU](https://github.com/tiann/KernelSU)

**Experimental! Use at your own risk!** This solution is based on [KernelSU](https://github.com/tiann/KernelSU) and is experimental!

> This is an unofficial fork. All rights are reserved to [@tiann](https://github.com/tiann)
>
> However, we will be a separately maintained branch of KSU in the future

## How to add

Using main branching (non-GKI device builds are not supported) (requires manual integration of susfs)
```
curl -LSs "https://raw.githubusercontent.com/SukiSU-Ultra/SukiSU-Ultra/main/kernel/setup.sh" | bash -s main
```

Using branches that support non-GKI devices (requires manual integration of susfs)
```
curl -LSs "https://raw.githubusercontent.com/SukiSU-Ultra/SukiSU-Ultra/main/kernel/setup.sh" | bash -s nongki
```

## How to use integrated susfs

1. Use the susfs-dev branch directly without any patching (Support for non-GKI device builds)

```
curl -LSs "https://raw.githubusercontent.com/SukiSU-Ultra/SukiSU-Ultra/main/kernel/setup.sh" | bash -s susfs-dev
```

## KPM Support

- Based on KernelPatch, we have removed duplicates of KSU and kept only KPM support.
- We will introduce more APatch-compatible functions to ensure the integrity of KPM functionality.

We will introduce more APatch-compatible functions to ensure the completeness of KPM functionality.

KPM templates: https://github.com/udochina/KPM-Build-Anywhere

:::note
1. `CONFIG_KPM=y` needs to be added.
2. Non-GKI devices need to add `CONFIG_KALLSYMS=y` and `CONFIG_KALLSYMS_ALL=y` as well.
3. Some kernel source code below `4.19` also needs to be backport from `4.19` to the header file `set_memory.h`.
:::

## How to do a system update to retain ROOT
- After OTA, don't reboot first, go to the manager flashing/patching kernel interface, find `GKI/non_GKI install` and select the Anykernel3 kernel zip file that needs to be flashed, select the slot that is opposite to the current running slot of the system for flashing, and then reboot to retain the GKI mode update （This method is not supported for all non-GKI devices, so please try it yourself. It is the safest way to use TWRP for non-GKI devices.）
- Or use LKM mode to install to the unused slot (after OTA).

## Hook method
- This method references the hook method from (https://github.com/rsuntk/KernelSU)

1. **KPROBES hook:**
    - Also used for Loadable Kernel Module (LKM)
    - Default hook method on GKI kernels.
    - Need `CONFIG_KPROBES=y`

2. **Manual hook:**
    - Standard KernelSU hook: https://kernelsu.org/guide/how-to-integrate-for-non-gki.html#manually-modify-the-kernel-source
    - backslashxx's syscall manual hook: https://github.com/backslashxx/KernelSU/issues/5
    - Default hook method on Non-GKI kernels.
    - Need `CONFIG_KSU_MANUAL_HOOK=y`

## Usage

### Universal GKI

Please **all** refer to https://kernelsu.org/zh_CN/guide/installation.html

:::note
1. for devices with GKI 2.0 such as Xiaomi, Redmi, Samsung, etc. (excludes kernel-modified manufacturers such as Meizu, OnePlus, Zenith, and oppo)
2. Find the GKI build in [more links](/links). Find the device kernel version. Then download it and use TWRP or kernel flashing tool to flash the zip file with AnyKernel3 suffix.
3. The .zip archive without suffix is uncompressed, the gz suffix is the compression used by Tenguet models.
:::
### OnePlus

1. Use the link mentioned in the 'More Links' section to create a customized build with your device information, and then flash the zip file with the AnyKernel3 suffix.

:::note
- You only need to fill in the first two parts of kernel versions, such as 5.10, 5.15, 6.1, or 6.6.
- Please search for the processor codename by yourself, usually it is all English without numbers.
- You can find the branch and configuration files from the OnePlus open-source kernel repository.
