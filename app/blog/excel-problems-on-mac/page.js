// /app/blog/excel-problems-on-mac/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import styles from "@/styles/excelProblemsOnMacBlog.module.scss";
import dan from "@/public/team/dan.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import TriageSvg from "./(svgs)/TriageSvg";
import LadderSvg from "./(svgs)/LadderSvg";
import MacMapSvg from "./(svgs)/MacMapSvg";
import {
  SketchUpdate,
  SketchLadder,
  SketchRange,
  SketchBackup,
  SketchWindowsOnly,
} from "./(svgs)/MistakeSketches";
import {
  IconAlert,
  IconArrow,
  IconBolt,
  IconBulb,
  IconCheck,
  IconChevron,
  IconClock,
  IconCloud,
  IconDisk,
  IconFile,
  IconInfo,
  IconKeyboard,
  IconLaptop,
  IconPulse,
  IconRefresh,
  IconSearch,
  IconShield,
  IconWrench,
} from "./(svgs)/Icons";

// Keep these three in sync with layout.js
const PAGE_URL = "https://www.officeexperts.com.au/blog/excel-problems-on-mac";
const PAGE_TITLE = "Excel Problems on Mac and How to Fix Them | Office Experts";
const PAGE_DESCRIPTION =
  "Discover practical solutions to the 10 most common Excel problems on Mac. Learn how to troubleshoot Excel for macOS Sequoia, Sonoma, and Ventura.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "10 Common Excel Problems on Mac and How to Fix Them (2026 Guide)";
const BREADCRUMB_NAME = "10 Common Excel Problems on Mac";
const AUTHOR_NAME = "Daniel Thomas";
const WORD_COUNT = 5359;
const READING_MINUTES = 23;
const READING_TIME = `${READING_MINUTES} min read`;
const HERO_IMAGE_PATH = "/blog/mac/excel-mac-problems.webp";
const HERO_IMAGE_ALT = "Excel problems on a Mac computer";
// Offset is +11:00 (AEDT) from the first Sunday of October to the first Sunday of April.
const DATE_PUBLISHED = "2025-12-12T09:00:00+11:00";
const DATE_MODIFIED = "2026-11-18T09:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const MS_UNINSTALL =
  "https://support.microsoft.com/office/eefa1199-5b58-43af-8a3d-b73dc1a8cae3";
const MS_CLEAN_UNINSTALL =
  "https://support.microsoft.com/office/ec3aa66e-6a76-451f-9d35-cba2e14e94c0";
const MS_MACOS_SUPPORT =
  "https://support.microsoft.com/office/16b8414f-08ec-4b24-8c91-10a918f649f8";
const MS_STARTUP_FAILS =
  "https://learn.microsoft.com/en-us/troubleshoot/microsoft-365-apps/excel/fails-starting-excel-mac";

const ExtLink = ({ href, children }) => (
  <a
    href={href}
    className={styles.inlineLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Inl = ({ href, children }) => (
  <Link href={href} className={styles.inlineLink}>
    {children}
  </Link>
);

const TOC = [
  { href: "#intro", label: "Introduction" },
  { href: "#triage", label: "Which problem do you have?" },
  { href: "#ladder", label: "The fix ladder" },
  { href: "#problem-1", label: "Excel Won’t Open or Crashes" },
  { href: "#problem-2", label: "Excel Freezing or Slow" },
  { href: "#problem-3", label: "“Upgrade Required” Error" },
  { href: "#problem-4", label: "Files Won’t Open Error" },
  { href: "#problem-5", label: "Opening Wrong Files" },
  { href: "#problem-6", label: "Solver Add-in Issues" },
  { href: "#problem-7", label: "Selection Issues After Update" },
  { href: "#problem-8", label: "Installation Error" },
  { href: "#problem-9", label: "Keyboard Shortcuts Not Working" },
  { href: "#problem-10", label: "Windows Files Compatibility" },
  { href: "#prevention", label: "Prevention and best practices" },
  { href: "#mistakes", label: "Common mistakes" },
  { href: "#help", label: "Need professional help?" },
  { href: "#faq", label: "FAQ" },
  { href: "#conclusion", label: "Moving forward" },
];

const GLANCE = [
  {
    value: "10",
    label: "Problems covered",
    text: "Crashes, freezes, licence errors, shortcuts and more.",
  },
  {
    value: "3",
    label: "Fixes to try first",
    text: "Update Excel, restart, then reset Excel’s settings.",
  },
  {
    value: "3",
    label: "macOS releases supported",
    text: "Microsoft supports the newest macOS and the previous two.",
  },
];

const TRIAGE_ROWS = [
  {
    sym: "Excel quits on launch, or you only see a spinner",
    n: 1,
    fix: "Force quit, restart, reset preferences",
  },
  {
    sym: "Spinning beachball when you delete rows or open big files",
    n: 2,
    fix: "Check Activity Monitor, update Excel",
  },
  {
    sym: "“Upgrade required” despite a paid licence",
    n: 3,
    fix: "Sign out and back in, check your account",
  },
  {
    sym: "“Excel cannot open the file”",
    n: 4,
    fix: "Try Excel for the web, check permissions",
  },
  {
    sym: "Wrong or random files open at startup",
    n: 5,
    fix: "Clear the recent list, check the startup folder",
  },
  {
    sym: "“Solver encountered an error value”",
    n: 6,
    fix: "Look for error cells in the model",
  },
  {
    sym: "Cells won’t select or highlight after a macOS update",
    n: 7,
    fix: "Update Excel, confirm macOS is supported",
  },
  {
    sym: "“Damaged or incomplete installation”",
    n: 8,
    fix: "Restart, run First Aid, reinstall",
  },
  {
    sym: "Alt shortcuts or function keys do nothing",
    n: 9,
    fix: "Use the Mac shortcuts, change the function-key setting",
  },
  {
    sym: "A Windows colleague’s workbook breaks on your Mac",
    n: 10,
    fix: "Find the Windows-only features",
  },
];

const RUNGS = [
  {
    t: "Restart and retry.",
    d: "Quit Excel completely (Command + Q), then restart the Mac. This clears stuck background processes and locked files.",
  },
  {
    t: "Update everything.",
    d: "Update Excel through Microsoft AutoUpdate and macOS through Software Update. Many problems are known bugs that a newer build already fixes.",
  },
  {
    t: "Reset settings.",
    d: "Move Excel’s preference files out of your Library so Excel builds fresh ones. Problem #1 shows exactly how.",
  },
  {
    t: "Clear caches.",
    d: "Move Microsoft Office’s cache folders aside. Office rebuilds them the next time it opens.",
  },
  {
    t: "Test a new user.",
    d: "Create a temporary standard user in System Settings > Users & Groups and open Excel there. If it works, the problem lives in your own profile, not in Excel.",
  },
  {
    t: "Clean reinstall.",
    d: "Remove Office with Microsoft’s steps, restart, and install a fresh copy. Back up first, because this one has the most side effects.",
  },
];

const SHORTCUTS = [
  ["Edit the active cell", "F2", "Control + U"],
  ["Toggle absolute references", "F4", "Command + T"],
  ["Find", "Ctrl + F", "Command + F"],
  ["Save", "Ctrl + S", "Command + S"],
  ["Fill down", "Ctrl + D", "Command + D"],
  ["AutoSum", "Alt + =", "Command + Shift + T"],
  ["New line inside a cell", "Alt + Enter", "Control + Option + Return"],
  ["Switch between open workbooks", "Ctrl + Tab", "Command + ` (backtick)"],
];

const PROBLEMS = [
  {
    id: "problem-1",
    title: "Problem #1: Excel Won’t Open",
    accent: "or Crashes on Startup",
    see: (
      <>
        Excel opens briefly, then crashes. You might see the dreaded “Microsoft
        Excel quit unexpectedly” error message, or just an endless spinning
        beachball. This issue appears particularly common among users who’ve
        recently updated to a new version of macOS.
      </>
    ),
    why: (
      <>
        The culprits are usually corrupted preference files, missing system
        libraries (particularly the ADAL4.framework error), incompatibility with
        new macOS versions, or conflicting third-party applications running in
        the background.{" "}
        <ExtLink href={MS_STARTUP_FAILS}>
          Microsoft’s own troubleshooting article
        </ExtLink>{" "}
        also lists corrupted application files and a corrupted user account
        profile as causes.
      </>
    ),
    steps: [
      {
        t: "Force quit and relaunch (start simple)",
        d: (
          <>
            Press Command + Option + Esc to open the Force Quit window, select
            Excel and click Force Quit. Alternatively, open Activity Monitor
            (Applications &gt; Utilities), find Microsoft Excel and click the
            stop button to end the process. Then reopen Excel. A leftover
            background process is a surprisingly common cause.
          </>
        ),
      },
      {
        t: "Boot in Safe Mode",
        d: (
          <>
            For Intel Macs: restart your Mac and immediately hold down the Shift
            key until you see the login window. For Apple silicon (M1/M2/M3 and
            newer) Macs: shut down completely, then press and hold the power
            button until you see “Loading startup options.” Select your startup
            disk, then hold Shift and click “Continue in Safe Mode.” Once in
            Safe Mode, try opening Excel. If it works, restart normally and the
            issue may be resolved.
          </>
        ),
      },
      {
        t: "Reset Excel’s preference files",
        d: (
          <>
            Quit all Office apps. In Finder, choose Go, hold the Option key and
            click Library. Open Preferences and move com.microsoft.Excel.plist
            to your Desktop, then check the Preferences &gt; Microsoft folder
            for com.microsoft.Excel.prefs.plist and move that too if it’s there.
            Restart Excel to let it create fresh preference files. If that fixes
            the problem you can delete the moved files. If it doesn’t, put them
            back.
          </>
        ),
      },
      {
        t: "Check the startup disk with First Aid",
        d: (
          <>
            Open Disk Utility (Applications &gt; Utilities), select your startup
            disk, click First Aid and run it. This checks the disk’s file system
            for errors that can stop apps from launching properly. Current
            versions of macOS no longer have a separate “repair permissions”
            step, so don’t worry if you can’t find one.
          </>
        ),
      },
      {
        t: "Complete reinstall",
        d: (
          <>
            If nothing else works,{" "}
            <ExtLink href={MS_UNINSTALL}>
              uninstall Office for Mac using Microsoft’s steps
            </ExtLink>
            , including the leftover files in your user Library, restart, then
            download a fresh copy from your Microsoft account. If you use
            Outlook on the same Mac, back its data up first, because Microsoft
            warns that removing its data folders deletes that data. If a normal
            uninstall isn’t enough, Microsoft also publishes a{" "}
            <ExtLink href={MS_CLEAN_UNINSTALL}>more thorough clean-out</ExtLink>
            .
          </>
        ),
      },
    ],
    tip: (
      <>
        Test with a brand-new blank workbook before anything drastic. If Excel
        opens fine on its own but crashes with one specific file, skip ahead to
        Problem #4.
      </>
    ),
    prevent: (
      <>
        Keep macOS and Excel updated simultaneously, but avoid beta macOS
        versions if you rely on Excel for work. Wait a week or two after major
        updates to ensure compatibility issues are ironed out.
      </>
    ),
  },
  {
    id: "problem-2",
    title: "Problem #2: Excel Freezing",
    accent: "or Running Extremely Slow",
    see: (
      <>
        You’re seeing the spinning beachball during basic operations, facing
        5-10 minute load times for files that should open instantly, or
        experiencing freezes when deleting rows or columns. Larger workbooks,
        particularly those of several megabytes and up, seem especially prone to
        these issues.
      </>
    ),
    why: (
      <>
        Large workbooks with complex formulas, insufficient RAM (especially
        common on 8GB Macs), too many background processes, outdated Excel
        versions, or excessive macros and{" "}
        <Inl href="/services/add-in-creation">add-ins</Inl> can all contribute
        to performance problems. Heavy, repeated writes to cells can also push a
        laptop into thermal throttling, which slows everything further.
      </>
    ),
    steps: [
      {
        t: "Identify resource hogs",
        d: (
          <>
            Use Activity Monitor (Applications &gt; Utilities) to check Excel’s
            memory usage. Close unnecessary applications running in the
            background. If you see Excel consuming several gigabytes of RAM with
            a small file, you’ve likely found your problem.
          </>
        ),
      },
      {
        t: "Optimise large workbooks",
        d: (
          <>
            Open files with macros disabled when the workbook allows it, copy
            only the sections you need into a new workbook, and remove unused
            worksheets. Look for formulas that recalculate constantly, such as
            OFFSET, INDIRECT and TODAY, and for formulas that reference entire
            columns. Switching Formulas &gt; Calculation Options to Manual while
            you edit can help. Recalculate (Command + =) before you save.
          </>
        ),
      },
      {
        t: "Update Excel",
        d: (
          <>
            Check for updates through Microsoft AutoUpdate (Help &gt; Check for
            Updates), or the App Store if that’s where you installed Office
            from. Microsoft regularly releases performance and stability fixes,
            so run the latest build available to you.
          </>
        ),
      },
      {
        t: "Clear Excel’s cache",
        d: (
          <>
            Quit Office, then in your user Library open Caches and move the
            Microsoft Office cache folders to your Desktop. This removes
            temporary files that can slow Excel down over time, and Office
            rebuilds what it needs.
          </>
        ),
      },
      {
        t: "Free up Mac storage",
        d: (
          <>
            As a rule of thumb, keep at least 15–20GB free on your startup disk.
            Use System Settings &gt; General &gt; Storage to clear temporary
            files and old downloads.
          </>
        ),
      },
      {
        t: "Disable add-ins",
        d: (
          <>
            Go to Tools &gt; Excel Add-ins and temporarily disable all add-ins
            to test performance. Re-enable them one at a time to identify the
            culprit.
          </>
        ),
      },
    ],
    tip: (
      <>
        Excel for the web is a handy comparison. If a file is fine there but
        slow in the Mac app, your Mac or install is more likely the culprit than
        the workbook. The two versions have different features, so treat it as a
        test rather than a fix. If you regularly work with complex models, more
        memory generally makes a noticeable difference.
      </>
    ),
    prevent: (
      <>
        Check Activity Monitor now and then, restart your Mac weekly, and keep
        workbooks lean. Archive old sheets instead of carrying years of unused
        data in a live model.
      </>
    ),
  },
  {
    id: "problem-3",
    title: "Problem #3: “Upgrade Required” Error",
    accent: "Despite Installing Office 2024",
    see: (
      <>
        You’ve paid for Office 2024, but Excel keeps showing an upgrade message.
        Excel and PowerPoint remain stuck on an old build (version 16.78 in the
        cases we’ve seen), while{" "}
        <Inl href="/services/microsoft-word">Word works perfectly</Inl>. This is
        particularly maddening when you know you have a valid licence.
      </>
    ),
    why: (
      <>
        Incomplete activation, licences not properly linked to your Microsoft
        account, mixed old and new Office versions, or installation glitches
        typically cause this issue. It’s also worth confirming your Mac meets
        the minimum macOS version for a new Office 2024 install, because
        Microsoft sets one and raises it over time.
      </>
    ),
    steps: [
      {
        t: "Verify your Microsoft account",
        d: (
          <>
            Sign out of Excel completely (Excel &gt; Sign Out), then sign back
            in with the correct Microsoft account that has the Office 2024
            licence attached.
          </>
        ),
      },
      {
        t: "Manually check for updates",
        d: (
          <>
            Go to Help &gt; Check for Updates and force the update if needed.
            Sometimes the automatic update process fails silently.
          </>
        ),
      },
      {
        t: "Remove and reinstall Office",
        d: (
          <>
            Follow{" "}
            <ExtLink href={MS_UNINSTALL}>
              Microsoft’s uninstall steps for Office for Mac
            </ExtLink>
            , then perform a clean install from the Microsoft 365 website or
            your Microsoft account.
          </>
        ),
      },
      {
        t: "Verify your subscription",
        d: (
          <>
            Check your Microsoft account portal to confirm your Office 2024
            purchase shows as active. Sometimes licences need to be manually
            activated.
          </>
        ),
      },
      {
        t: "Contact Microsoft Support",
        d: (
          <>
            If you’ve tried everything above, it’s time to escalate. Have your
            purchase confirmation and product key ready when you contact
            support.
          </>
        ),
      },
    ],
    tip: (
      <>
        If you have more than one Microsoft account (work, school and personal),
        sign in with the one that actually owns the licence. Using the wrong one
        is a frequent reason Office looks unlicensed.
      </>
    ),
    prevent: (
      <>
        Keep your purchase confirmation and product key somewhere safe, and note
        which Microsoft account the licence is attached to.
      </>
    ),
  },
  {
    id: "problem-4",
    title: "Problem #4: Files Won’t Open -",
    accent: "“Cannot Open the File” Error",
    see: (
      <>
        Excel launches fine, but specific files refuse to open. You see the
        “Excel cannot open the file” error, yet these same files open without
        issue on other devices or Windows computers.
      </>
    ),
    why: (
      <>
        File corruption, incompatible file formats, wrong file extensions,
        permissions issues, incomplete downloads, or files created in different
        Excel versions can all trigger this error.
      </>
    ),
    steps: [
      {
        t: "Try opening on another device",
        d: (
          <>
            Use Excel for the web, or another computer, to work out whether the
            issue is file-specific or app-specific. If the file opens there, the
            problem is with your Mac’s Excel installation.
          </>
        ),
      },
      {
        t: "Check file permissions",
        d: (
          <>
            Right-click the file, select Get Info, and make sure you have read
            and write access. Expand the Sharing &amp; Permissions section and
            verify your user account has the appropriate privileges.
          </>
        ),
      },
      {
        t: "Check the file extension",
        d: (
          <>
            Make sure the extension matches the real format (.xlsx, .xlsm, .xls
            or .csv). Files saved on Windows sometimes arrive with a hidden or
            wrong extension, such as a leftover .tmp. If the file is in an old
            .xls format, saving a copy as .xlsx on another device can also help.
          </>
        ),
      },
      {
        t: "Check the download or sync",
        d: (
          <>
            Files from email or cloud storage can arrive incomplete. Download
            the file again, and if it lives in a synced folder, make sure it has
            finished syncing and isn’t an online-only placeholder.
          </>
        ),
      },
      {
        t: "Try a repair route",
        d: (
          <>
            On Windows, Excel’s Open and Repair command (the arrow beside Open)
            can often recover a damaged workbook. If you have a Windows computer
            available, try it there. Excel for the web is another route worth
            testing, because it can sometimes open files the desktop app
            rejects.
          </>
        ),
      },
      {
        t: "Use recovery tools only as a last resort",
        d: (
          <>
            Paid file-recovery tools exist, but consider them only after you’ve
            exhausted the options above. Always back up the file before
            attempting repairs, and run any tool on a copy.
          </>
        ),
      },
    ],
    tip: (
      <>
        Always work on a copy of a problem file. A repair attempt can overwrite
        the damaged original, and the original is your only chance of a
        different recovery method later.
      </>
    ),
    prevent: (
      <>
        Enable Time Machine and maintain regular backups. It’s the best
        insurance against file corruption and data loss.
      </>
    ),
  },
  {
    id: "problem-5",
    title: "Problem #5: Excel Opening",
    accent: "Wrong or Random Files",
    see: (
      <>
        Excel automatically opens non-.xlsx files from your Documents folder on
        startup, or you’re bombarded with multiple error pop-ups when launching
        the application. This issue notably increased after Excel updated to
        version 16.73.
      </>
    ),
    why: (
      <>
        A corrupted recent files list, incorrect file associations, a startup
        folder setting that points at Documents, or Excel preference issues
        typically trigger this behaviour.
      </>
    ),
    steps: [
      {
        t: "Clear the recent files list",
        d: (
          <>
            Go to File &gt; Open Recent &gt; Clear Menu to reset the recent
            files list. Alternatively, manually move the preference file as
            described in Problem #1.
          </>
        ),
      },
      {
        t: "Check the startup folder setting",
        d: (
          <>
            In Excel &gt; Preferences &gt; General, look for an “At startup,
            open all files in” option (the exact wording varies by version). If
            it points at your Documents folder, Excel will try to open
            everything in it each time it launches. Clear it.
          </>
        ),
      },
      {
        t: "Reset file associations",
        d: (
          <>
            Right-click any .xlsx file, select Get Info, expand “Open with,”
            choose Microsoft Excel, then click “Change All” to reset all Excel
            file associations.
          </>
        ),
      },
      {
        t: "Turn off “Reopen windows when logging back in”",
        d: (
          <>
            When you choose Restart or Shut Down, macOS shows a box with a
            “Reopen windows when logging back in” tick box. Untick it to prevent
            Excel reopening previous files automatically.
          </>
        ),
      },
      {
        t: "Delete Excel preference files",
        d: (
          <>
            Follow the same steps as Problem #1 to move out corrupted preference
            files.
          </>
        ),
      },
      {
        t: "Check Login Items",
        d: (
          <>
            Go to System Settings &gt; General &gt; Login Items (called Login
            Items &amp; Extensions on newer macOS) and remove any Excel-related
            entries that shouldn’t be there.
          </>
        ),
      },
    ],
    tip: (
      <>
        If a stray file opens every single time, note which folder it lives in.
        The same folder each time points at the startup-folder setting, while a
        different file each time usually points at the reopen-windows option.
      </>
    ),
    prevent: (
      <>
        Quit Excel properly with Command + Q before shutting down, and clear the
        recent files list now and then, especially after moving or renaming
        folders.
      </>
    ),
  },
  {
    id: "problem-6",
    title: "Problem #6: Solver Add-in",
    accent: "Not Working Properly",
    see: (
      <>
        You see “Solver encountered an error value” messages, Solver is enabled
        but returns errors despite correct-looking formulas and data, and the
        same file works perfectly on Windows. This can look specific to Mac’s
        implementation of Solver.
      </>
    ),
    why: (
      <>
        The Mac version of Solver has limitations compared to Windows,
        incompatibilities with certain formula types, and sometimes the add-in
        isn’t properly loaded. The error message itself, though, usually points
        at a formula in the model that is returning an error.
      </>
    ),
    steps: [
      {
        t: "Check the model for error values",
        d: (
          <>
            “Solver encountered an error value” usually means a cell in the
            objective, a constraint or a variable cell is showing an error such
            as #VALUE! or #DIV/0!. Fix those formulas first. It’s a model
            problem more often than a Mac problem, even when it looks
            Mac-specific.
          </>
        ),
      },
      {
        t: "Verify Solver is enabled",
        d: (
          <>
            Go to Tools &gt; Excel Add-ins and check the Solver Add-in box.
            Sometimes it becomes disabled after updates.
          </>
        ),
      },
      {
        t: "Disable and re-enable Solver",
        d: (
          <>
            Uncheck Solver, restart Excel completely, then re-enable it. This
            forces a fresh initialisation.
          </>
        ),
      },
      {
        t: "Check formula compatibility",
        d: (
          <>
            Some Windows Solver features simply aren’t available on Mac.
            Consider alternative formula approaches or restructure your model to
            work within Mac’s limitations.
          </>
        ),
      },
      {
        t: "Run the same model on Windows",
        d: (
          <>
            If the identical file solves on a Windows PC and fails on your Mac,
            you’ve confirmed the issue is Mac-specific and can plan around it
            instead of hunting for a broken formula.
          </>
        ),
      },
      {
        t: "Consider Windows alternatives",
        d: (
          <>
            For heavy Solver use, running Windows through Parallels or a similar
            virtual machine might be worth the investment. Boot Camp only exists
            on older Intel Macs. Evaluate whether the time saved justifies the
            cost.
          </>
        ),
      },
    ],
    tip: (
      <>
        Keep Solver models simple. Avoid volatile functions and links to other
        workbooks inside the calculation chain, and save a copy before every
        solve so you can always return to a clean starting point.
      </>
    ),
    prevent: (
      <>
        Re-check that Solver is ticked in Excel Add-ins after major Excel
        updates, since the setting can reset.
      </>
    ),
  },
  {
    id: "problem-7",
    title: "Problem #7: Selection and Highlighting Issues",
    accent: "After macOS Upgrade",
    see: (
      <>
        After updating macOS, you can’t highlight text, cells won’t select
        properly, selected cells aren’t visible, or margin lines have
        disappeared. This significantly impacts usability.
      </>
    ),
    why: (
      <>
        macOS and Excel incompatibility, corrupted Office preferences, display
        settings conflicts, or add-in interference commonly cause these issues.
        It’s also possible the Mac has moved past what your Excel build was
        tested on, or the other way around: Microsoft supports the newest macOS
        and the previous two, and its requirements can change with an Office
        update.
      </>
    ),
    steps: [
      {
        t: "Confirm your macOS version is supported",
        d: (
          <>
            Check{" "}
            <ExtLink href={MS_MACOS_SUPPORT}>
              Microsoft’s macOS support page
            </ExtLink>{" "}
            for the versions currently supported. On an unsupported version,
            Office keeps working but stops receiving updates, including security
            updates.
          </>
        ),
      },
      {
        t: "Update to the latest Excel version",
        d: (
          <>
            This is critical after major macOS updates. Microsoft typically
            releases compatibility patches within weeks of major OS releases.
          </>
        ),
      },
      {
        t: "Reset Excel preferences",
        d: (
          <>
            Move the .plist files as described in Problem #1 to reset all
            preferences to defaults.
          </>
        ),
      },
      {
        t: "Check display settings",
        d: (
          <>
            Go to System Settings &gt; Displays and verify resolution settings.
            Sometimes scaling adjustments can resolve visibility issues.
          </>
        ),
      },
      {
        t: "Disable add-ins",
        d: (
          <>
            Test with all add-ins disabled (Tools &gt; Excel Add-ins) to
            determine if one is causing the conflict.
          </>
        ),
      },
      {
        t: "Create a new user profile",
        d: (
          <>
            If the issue persists, create a new macOS user account to test
            whether it’s a system-level problem. If Excel works fine in the new
            profile, migrate your data and use the fresh profile.
          </>
        ),
      },
    ],
    tip: (
      <>
        If selection only misbehaves in one workbook, check whether it’s using
        frozen panes, a split view or an unusual zoom level before you reset
        anything.
      </>
    ),
    prevent: (
      <>
        Update Excel the moment a new macOS version settles, and keep a note of
        which Excel build was working before you upgraded, so you can tell
        Microsoft support exactly what changed.
      </>
    ),
  },
  {
    id: "problem-8",
    title: "Problem #8: Damaged or Incomplete",
    accent: "Installation Error",
    see: (
      <>
        You see “Damaged or incomplete installation of Microsoft Excel” and the
        app won’t launch at all. This typically occurs after an interrupted
        install or system crash.
      </>
    ),
    why: (
      <>
        Interrupted installations or updates, corrupted program files, disk
        errors, or permission issues cause this error.
      </>
    ),
    steps: [
      {
        t: "Restart your Mac first",
        d: (
          <>
            The simplest fix often works. A clean restart can resolve temporary
            file locks or permission issues.
          </>
        ),
      },
      {
        t: "Run Disk Utility",
        d: (
          <>
            Open Disk Utility, select your startup disk, click First Aid, and
            run a full check of the disk.
          </>
        ),
      },
      {
        t: "Update macOS",
        d: (
          <>
            Go to System Settings &gt; General &gt; Software Update and install
            any pending updates. This can resolve underlying compatibility
            issues.
          </>
        ),
      },
      {
        t: "Complete uninstall and reinstall",
        d: (
          <>
            Remove all Office components using{" "}
            <ExtLink href={MS_UNINSTALL}>Microsoft’s uninstall steps</ExtLink>,
            clean out the leftover Library files, then perform a fresh install
            from Microsoft’s website.
          </>
        ),
      },
      {
        t: "Install from your Microsoft account",
        d: (
          <>
            Download a fresh installer from your Microsoft account rather than
            reusing an old one. Microsoft’s Support and Recovery Assistant is a
            Windows tool, so on a Mac the clean reinstall above is the reliable
            route.
          </>
        ),
      },
    ],
    tip: (
      <>
        Check that Excel sits in your main Applications folder and isn’t running
        from Downloads or a mounted disk image. Running an app from there can
        cause install errors.
      </>
    ),
    prevent: (
      <>
        Let installs and updates finish before you close the lid or shut down,
        and keep the Mac plugged in while Microsoft AutoUpdate runs.
      </>
    ),
  },
  {
    id: "problem-9",
    title: "Problem #9: Keyboard Shortcuts",
    accent: "Not Working",
    see: (
      <>
        Alt key shortcuts don’t work (a common complaint from Windows users),
        function keys aren’t responding, Control + Tab doesn’t switch workbooks,
        and your muscle memory from Windows feels useless.
      </>
    ),
    why: (
      <>
        This isn’t a bug. It’s by design. Mac uses a different shortcut system,
        macOS system shortcuts often conflict with Excel, Mission Control claims
        function keys, and Microsoft has intentionally designed Mac Excel
        differently.
      </>
    ),
    steps: [
      {
        t: "Learn the Mac equivalents",
        d: (
          <>
            Alt often becomes Command or Option, Ctrl (Windows) usually becomes
            Command (Mac), and F2 (edit cell on Windows) is Control + U on Mac.
            Windows-style Alt key sequences for the ribbon don’t work the same
            way, so use the menus or Excel’s search box for those commands. The
            table below covers the shortcuts people miss most.
          </>
        ),
      },
      {
        t: "Disable conflicting macOS shortcuts",
        d: (
          <>
            Go to System Settings &gt; Keyboard &gt; Keyboard Shortcuts and
            disable Mission Control shortcuts that conflict with Excel function
            keys.
          </>
        ),
      },
      {
        t: "Enable function keys",
        d: (
          <>
            In System Settings &gt; Keyboard &gt; Keyboard Shortcuts &gt;
            Function Keys, turn on “Use F1, F2, etc. keys as standard function
            keys.” Otherwise you’ll need to press Fn plus the F-key for Excel
            shortcuts.
          </>
        ),
      },
      {
        t: "Create custom shortcuts",
        d: (
          <>
            Go to Tools &gt; Customize Keyboard to build your own shortcuts that
            match your workflow and muscle memory.
          </>
        ),
      },
      {
        t: "Download a shortcut cheat sheet",
        d: (
          <>
            Microsoft provides Mac-specific Excel shortcut lists. Keep one handy
            while you retrain your muscle memory. Check out our other blog with{" "}
            <ExtLink href="/services/microsoft-excel/blog/20-advanced-excel-shortcuts">
              20 advanced Excel shortcuts
            </ExtLink>
            .
          </>
        ),
      },
    ],
    tip: (
      <>
        On most Mac keyboards the top row defaults to brightness and volume, so
        F2 does nothing unless you hold Fn or change the function-key setting
        above. Recent builds of Excel for Mac also accept F2 and F4 for the
        common cases, but Control + U and Command + T always work.
      </>
    ),
    prevent: (
      <>
        If you switch between a Windows PC at work and a Mac at home, write down
        your five most-used shortcuts for each and keep the list beside the
        keyboard.
      </>
    ),
    extra: "shortcuts",
  },
  {
    id: "problem-10",
    title: "Problem #10: Compatibility Issues",
    accent: "with Windows Files",
    see: (
      <>
        Files from Windows colleagues don’t work properly, macros are disabled
        or broken, formatting looks different,{" "}
        <Inl href="/services/dashboards">PivotCharts</Inl> are missing features,
        and <Inl href="/services/vba-macro-development">VBA code</Inl> throws
        errors. This creates friction in cross-platform teams.
      </>
    ),
    why: (
      <>
        Mac Excel is missing some Windows-only features, VBA compatibility
        differs significantly,{" "}
        <Inl href="/services/power-pivot">Power Pivot</Inl> isn’t available on
        Mac (check Microsoft’s current feature comparison, as this can change),
        and COM add-ins only work on Windows. These limitations aren’t unique to
        Excel. They extend across the entire Microsoft Office for Mac suite.
      </>
    ),
    steps: [
      {
        t: "Identify missing features",
        d: (
          <>
            Power Pivot, advanced VBA and UserForms, ActiveX controls and
            certain <Inl href="/services/power-query">data connections</Inl>{" "}
            don’t exist on Mac or work differently there. Knowing the
            limitations helps you plan workarounds. If a model really depends on
            Power Pivot, it may be worth{" "}
            <Inl href="/services/microsoft-power-platform/excel-to-power-bi-migration">
              moving it into Power BI
            </Inl>
            , which doesn’t care which computer the reader uses.
          </>
        ),
      },
      {
        t: "Use Excel for the web as a middle ground",
        d: (
          <>
            The web version is a useful way to check whether the file itself is
            the problem, because it opens the file without your Mac’s add-ins
            and settings. It has its own limits, so don’t expect it to stand in
            for desktop Windows features.
          </>
        ),
      },
      {
        t: "Request simplified files",
        d: (
          <>
            Ask Windows users to avoid Power Pivot and save without
            Windows-specific features when possible. Clear communication
            prevents frustration.
          </>
        ),
      },
      {
        t: "Consider virtualisation",
        d: (
          <>
            For users who absolutely need Windows Excel features, Parallels
            Desktop provides a seamless way to run Windows on a Mac. It’s a paid
            subscription and needs its own Windows and Office licences, so check
            current pricing and evaluate whether the productivity gains justify
            the cost.
          </>
        ),
      },
    ],
    tip: (
      <>
        Before a workbook becomes a team standard, have a Mac user open it and
        click every button and macro. It takes two minutes and avoids a week of
        confusion.
      </>
    ),
    prevent: (
      <>
        Agree on a shared “works on both” feature list with your Windows
        colleagues, and keep any Power Pivot or COM add-in work in a clearly
        labelled Windows-only file.
      </>
    ),
    extra: "map",
  },
];

const PREVENTION = [
  {
    Icon: IconRefresh,
    t: "Keep both macOS and Excel updated",
    d: (
      <>
        <em>...but don’t immediately install major updates.</em> Wait 1-2 weeks
        for compatibility patches.
      </>
    ),
  },
  {
    Icon: IconCloud,
    t: "Maintain regular backups",
    d: <>Use Time Machine and cloud storage for critical files.</>,
  },
  {
    Icon: IconPulse,
    t: "Monitor Mac performance",
    d: (
      <>Run periodic Activity Monitor checks to catch resource issues early.</>
    ),
  },
  {
    Icon: IconWrench,
    t: "Consider clean installs after major macOS updates",
    d: <>Do this if persistent issues develop.</>,
  },
  {
    Icon: IconBolt,
    t: "Join the Office Insider programme",
    d: (
      <>
        Get early access to bug fixes if you’re comfortable with pre-release
        software.
      </>
    ),
  },
  {
    Icon: IconDisk,
    t: "Maintain 20GB+ free storage",
    d: <>This gives Excel room to operate efficiently.</>,
  },
  {
    Icon: IconClock,
    t: "Restart your Mac weekly",
    d: (
      <>This prevents the accumulation of background issues and memory leaks.</>
    ),
  },
  {
    Icon: IconFile,
    t: "Document your custom settings",
    d: (
      <>
        Note your Quick Access Toolbar configurations and preferences for quick
        recovery after reinstalls.
      </>
    ),
  },
];

const MISTAKES = [
  {
    Sketch: SketchUpdate,
    title: "Installing a major macOS update on day one",
    fix: "Wait a week or two, then update Excel as soon as the new macOS has settled.",
  },
  {
    Sketch: SketchLadder,
    title: "Reinstalling Office before the quick fixes",
    fix: "Work up the fix ladder in order. A restart, an update and a preference reset take minutes.",
  },
  {
    Sketch: SketchRange,
    title: "Referencing whole columns in heavy formulas",
    fix: "Point formulas at the rows you actually use, or at a table, so Excel isn’t scanning a million empty cells.",
  },
  {
    Sketch: SketchBackup,
    title: "Keeping important workbooks in one place",
    fix: "Use Time Machine plus cloud storage, so a corrupted file never means lost work.",
  },
  {
    Sketch: SketchWindowsOnly,
    title: "Building Windows-only features into shared files",
    fix: "Keep shared workbooks to features both platforms support, and label any Windows-only file clearly.",
  },
];

const CHECKLIST = [
  "Write down the exact error message, or take a screenshot.",
  "Note your Excel version (Excel > About Excel) and your macOS version.",
  "Check you have at least 15–20GB of free storage.",
  "Try a brand-new blank workbook.",
  "Try the problem file in Excel for the web or on another computer.",
  "Test in a second macOS user account.",
  "Disable add-ins and try again.",
  "Back up your important files before changing anything.",
];

const FAQS = [
  {
    q: "Why does Excel keep crashing on my Mac?",
    a: (
      <>
        The usual suspects are corrupted preference files, an outdated Excel
        build, a macOS update that Excel hasn’t caught up with, or a conflicting
        add-in. Work through the{" "}
        <a href="#ladder" className={styles.inlineLink}>
          fix ladder
        </a>{" "}
        in order, starting with a restart and an update, before you consider a
        reinstall. Problem #1 has the full steps.
      </>
    ),
  },
  {
    q: "Is Excel for Mac as capable as Excel for Windows?",
    a: (
      <>
        For everyday work, such as formulas, tables, charts and PivotTables, it
        is very close. The gaps appear with advanced features. Power Pivot and
        COM add-ins are Windows-only, ActiveX controls don’t work, and{" "}
        <Inl href="/services/vba-macro-development">VBA macros</Inl> can need
        changes. Microsoft’s feature lists change over time, so check them
        before you commit a team to either platform.
      </>
    ),
  },
  {
    q: "Do I need to update macOS to keep getting Excel updates?",
    a: (
      <>
        Microsoft currently supports the newest major release of macOS and the
        previous two. On an older version Office keeps working but stops
        receiving updates, including security updates. Check{" "}
        <ExtLink href={MS_MACOS_SUPPORT}>Microsoft’s support page</ExtLink> for
        the current list, because it changes when new macOS versions arrive.
      </>
    ),
  },
  {
    q: "Should I use Excel for the web when desktop Excel misbehaves?",
    a: (
      <>
        It’s a good diagnostic. If a file opens and behaves in the web version
        but not on your Mac, the problem is probably your install rather than
        the file. It isn’t a full replacement, because it has fewer features
        than the desktop app, so use it to narrow down the cause rather than as
        the permanent fix.
      </>
    ),
  },
  {
    q: "When is it worth running Windows on my Mac?",
    a: (
      <>
        Only when your work genuinely depends on Windows-only features, such as
        Power Pivot, COM add-ins or ActiveX-heavy macros. A virtual machine such
        as Parallels is the usual route on current Macs, and it needs its own
        Windows and Office licences. If the dependency is a one-off model, it
        can be cheaper to{" "}
        <Inl href="/services/microsoft-power-platform/excel-to-power-bi-migration">
          move that model into Power BI
        </Inl>{" "}
        or have it rebuilt so it works on both platforms.
      </>
    ),
  },
];

const RELATED = [
  {
    href: "/blog/microsoft-word-for-mac",
    external: false,
    title: "Microsoft Word for Mac",
    text: "The same platform, a different Office app. Useful if Word is giving your Mac team trouble too.",
  },
  {
    href: "/blog/word-desktop-vs-web",
    external: false,
    title: "Word desktop vs web",
    text: "A look at when the browser version is enough and when you need the desktop app.",
  },
  {
    href: "/services/microsoft-excel/blog/20-advanced-excel-shortcuts",
    external: true,
    title: "20 advanced Excel shortcuts",
    text: "A follow-up to Problem #9 with shortcuts worth learning once your keyboard behaves.",
  },
];

const Callout = ({ Icon, label, children }) => (
  <aside className={styles.callout}>
    <span className={styles.calloutChip}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <p className={styles.calloutLabel}>{label}</p>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </aside>
);

const Problem = ({ p }) => (
  <section
    className={styles.problem}
    id={p.id}
    aria-labelledby={`${p.id}-heading`}
  >
    <h2 id={`${p.id}-heading`}>
      {p.title} <span className={styles.accent}>{p.accent}</span>
    </h2>

    <div className={styles.facts}>
      <div className={styles.fact}>
        <span className={styles.factChip}>
          <IconAlert />
        </span>
        <h3 className={styles.factTitle}>What you’ll see</h3>
        <p className={styles.factText}>{p.see}</p>
      </div>
      <div className={styles.fact}>
        <span className={styles.factChip}>
          <IconSearch />
        </span>
        <h3 className={styles.factTitle}>Why it happens</h3>
        <p className={styles.factText}>{p.why}</p>
      </div>
    </div>

    <h3 className={styles.subhead}>Solutions that actually work</h3>
    <ol className={styles.steps}>
      {p.steps.map((s, i) => (
        <li key={s.t} className={styles.step}>
          <span className={styles.stepNum} aria-hidden="true">
            {i + 1}
          </span>
          <div className={styles.stepBody}>
            <h4 className={styles.stepTitle}>{s.t}</h4>
            <p className={styles.stepText}>{s.d}</p>
          </div>
        </li>
      ))}
    </ol>

    {p.extra === "shortcuts" && (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className={styles.visuallyHidden}>
            Windows and Mac Excel shortcuts
          </caption>
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Windows</th>
              <th scope="col">Mac</th>
            </tr>
          </thead>
          <tbody>
            {SHORTCUTS.map((r) => (
              <tr key={r[0]}>
                <th scope="row">{r[0]}</th>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {p.extra === "map" && (
      <figure className={styles.diagram}>
        <div className={styles.diagramScroll}>
          <div className={styles.diagramInner}>
            <MacMapSvg />
          </div>
        </div>
        <figcaption className={styles.figcaption}>
          A broad guide to what carries across from a Windows workbook. Feature
          lists change, so confirm against Microsoft’s current documentation.
        </figcaption>
      </figure>
    )}

    <Callout Icon={IconBulb} label="Pro tip">
      {p.tip}
    </Callout>
    <Callout Icon={IconShield} label="Prevention">
      {p.prevent}
    </Callout>
  </section>
);

export default function ExcelProblemsOnMacBlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#article` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        inLanguage: "en-AU",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: BREADCRUMB_NAME,
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: PAGE_HEADLINE,
        alternativeHeadline:
          "Solve Excel Mac Crashes, Freezing, and Compatibility Issues",
        description: PAGE_DESCRIPTION,
        image: `${SITE_URL}${HERO_IMAGE_PATH}`,
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@id": `${SITE_URL}#organization` },
        mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        articleSection: "Excel Troubleshooting",
        keywords: ["Excel Mac problems"],
        wordCount: WORD_COUNT,
        timeRequired: `PT${READING_MINUTES}M`,
        inLanguage: "en-AU",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero} aria-labelledby="epm-hero-heading">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 id="epm-hero-heading" className={styles.heroTitle}>
                10 Common Excel Problems on Mac{" "}
                <span className={styles.accent}>
                  and How to Fix Them (2026 Guide)
                </span>
              </h1>
              <p className={styles.heroLede}>
                Excel crashes, freezes, refuses to open a file or ignores your
                keyboard shortcuts. This guide walks you through the 10 most
                common Excel Mac problems in plain English, with fixes you can
                try in order, from the quickest to the most drastic.
              </p>
              <div className={styles.byline}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.bylineText}>
                  <span className={styles.bylineName}>By {AUTHOR_NAME}</span>
                  <span className={styles.bylineMeta}>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>
                    <span className={styles.dot} aria-hidden="true">
                      ·
                    </span>
                    {READING_TIME}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg flowClass={styles.flow} liveClass={styles.live} />
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <div className={styles.glance}>
          {GLANCE.map((g) => (
            <div key={g.label} className={styles.glanceCard}>
              <p className={styles.glanceValue}>{g.value}</p>
              <p className={styles.glanceLabel}>{g.label}</p>
              <p className={styles.glanceText}>{g.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>Quick pick</p>
            <ul>
              {TOC.map((t) => (
                <li key={t.href}>
                  <a href={t.href} className={styles.tocLink}>
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* INTRO */}
            <section
              className={styles.section}
              id="intro"
              aria-labelledby="intro-heading"
            >
              <h2 id="intro-heading">
                When Excel Mac{" "}
                <span className={styles.accent}>Lets You Down</span>
              </h2>
              <p>
                You’re 20 minutes from a critical deadline when Excel decides to
                crash... Again. Or perhaps you’ve just watched the spinning
                beachball for the fifth time this morning while trying to delete
                a single row. Sound all too familiar?
              </p>
              <p>
                Excel for Mac has come a long way, but it still presents unique
                challenges that can frustrate even experienced users. Whether
                you’re running a recent release such as macOS Tahoe (26.x),
                Sequoia (15.x) or Sonoma (14.x), or an older one like Ventura
                (13.x), the issues remain remarkably consistent, and
                frustratingly persistent.
              </p>
              <p>
                The good news? Most of these problems have practical, tested
                solutions. This guide walks you through the 10 most common Excel
                Mac issues and shows you exactly how to fix them, hopefully
                saving you hours of troubleshooting and preventing future
                headaches.
              </p>
              <p>
                You don’t need to read it top to bottom. Use the chart below to
                find the problem that matches what you’re seeing, jump straight
                to it, and come back to the fix ladder whenever a step sounds
                unfamiliar.
              </p>
              <Callout Icon={IconInfo} label="Before you start">
                Several fixes move or delete files. Make a Time Machine backup
                first and copy any important workbooks somewhere safe. Where we
                say “move” a file, move it to your Desktop rather than deleting
                it, so you can put it back if it doesn’t help.
              </Callout>
            </section>

            {/* TRIAGE */}
            <section
              className={styles.section}
              id="triage"
              aria-labelledby="triage-heading"
            >
              <h2 id="triage-heading">
                Which Excel Mac problem{" "}
                <span className={styles.accent}>do you have?</span>
              </h2>
              <p>
                Answer four quick questions and the chart points you to the
                right problem. The table underneath lists the same symptoms with
                the quickest first fix, in case you’d rather scan.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <TriageSvg />
                  </div>
                </div>
                <figcaption className={styles.figcaption}>
                  Follow the Yes and No arrows down the page.
                </figcaption>
              </figure>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.visuallyHidden}>
                    Symptoms, the matching problem and the first fix to try
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">What you see</th>
                      <th scope="col">Read</th>
                      <th scope="col">Try first</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TRIAGE_ROWS.map((r) => (
                      <tr key={r.n}>
                        <th scope="row">{r.sym}</th>
                        <td>
                          <a
                            href={`#problem-${r.n}`}
                            className={styles.inlineLink}
                          >
                            Problem #{r.n}
                          </a>
                        </td>
                        <td>{r.fix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* LADDER */}
            <section
              className={styles.section}
              id="ladder"
              aria-labelledby="ladder-heading"
            >
              <h2 id="ladder-heading">
                The fix ladder:{" "}
                <span className={styles.accent}>
                  from quick fixes to a clean reinstall
                </span>
              </h2>
              <p>
                Many of the problems below share the same handful of fixes. So
                that you don’t repeat the same steps ten times, here they are in
                the order we’d try them. Start at the bottom and stop as soon as
                Excel behaves.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <LadderSvg />
                  </div>
                </div>
                <figcaption className={styles.figcaption}>
                  Six rungs, from a thirty-second restart to a full reinstall.
                </figcaption>
              </figure>
              <ul className={styles.rungs}>
                {RUNGS.map((r) => (
                  <li key={r.t}>
                    <strong>{r.t}</strong> {r.d}
                  </li>
                ))}
              </ul>
            </section>

            {/* THE TEN PROBLEMS */}
            {PROBLEMS.map((p) => (
              <Problem key={p.id} p={p} />
            ))}

            {/* PREVENTION */}
            <section
              className={styles.section}
              id="prevention"
              aria-labelledby="prevention-heading"
            >
              <h2 id="prevention-heading">
                Prevention and{" "}
                <span className={styles.accent}>Best Practices</span>
              </h2>
              <p>
                Prevention beats troubleshooting. Here’s how to minimise Excel
                Mac problems:
              </p>
              <ul className={styles.cards}>
                {PREVENTION.map((c) => (
                  <li key={c.t} className={styles.card}>
                    <span className={styles.cardChip}>
                      <c.Icon />
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{c.t}</h3>
                      <p className={styles.cardText}>{c.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* MISTAKES */}
            <section
              className={styles.section}
              id="mistakes"
              aria-labelledby="mistakes-heading"
            >
              <h2 id="mistakes-heading">
                Common mistakes{" "}
                <span className={styles.accent}>that make things worse</span>
              </h2>
              <p>
                A few habits turn small Excel Mac problems into big ones. Here
                are the five we see most, with the better habit beside each.
              </p>
              <ul className={styles.mistakes}>
                {MISTAKES.map((m, i) => (
                  <li key={m.title} className={styles.mistake}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className={styles.mistakeTitle}>{m.title}</h3>
                    <div className={styles.sketch}>
                      <m.Sketch />
                    </div>
                    <p className={styles.mistakeFix}>
                      <span className={styles.pill}>Instead</span> {m.fix}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className={styles.subhead}>Before you ask for help</h3>
              <p>
                If you do need to escalate to Microsoft, your IT team or us, a
                few minutes of preparation saves hours. Run through this list
                first:
              </p>
              <ul className={styles.checklist}>
                {CHECKLIST.map((c) => (
                  <li key={c}>
                    <span className={styles.tick}>
                      <IconCheck />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* HELP CTA */}
            <section
              className={styles.cta}
              id="help"
              aria-labelledby="help-heading"
            >
              <span className={styles.ctaChip}>
                <IconLaptop />
              </span>
              <h2 id="help-heading">
                Need Professional Help?{" "}
                <span className={styles.accent}>We can take it from here</span>
              </h2>
              <p>
                If you’ve tried these solutions and still face persistent Excel
                problems, or if you need custom Excel solutions that work
                seamlessly across Mac and Windows, our team of{" "}
                <Link
                  href="/microsoft-support-and-training-australia"
                  className={styles.ctaLink}
                >
                  Office Experts
                </Link>{" "}
                can help. We specialise in solving complex Excel challenges and
                building robust spreadsheet solutions for businesses of all
                sizes.
              </p>
              <div className={styles.ctaActions}>
                <a href="#contact" className={styles.ctaButton}>
                  Talk to our team
                </a>
                <Link
                  href="/services/vba-macro-development"
                  className={styles.ctaArrow}
                >
                  Explore VBA and macro services <IconArrow />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section
              className={styles.section}
              id="faq"
              aria-labelledby="faq-heading"
            >
              <h2 id="faq-heading">
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details key={f.q} className={styles.faq}>
                    <summary>
                      <span>{f.q}</span>
                      <span className={styles.faqIcon}>
                        <IconChevron />
                      </span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section
              className={styles.section}
              id="conclusion"
              aria-labelledby="conclusion-heading"
            >
              <h2 id="conclusion-heading">
                Moving Forward with{" "}
                <span className={styles.accent}>Excel on Mac</span>
              </h2>
              <p>
                Excel for Mac isn’t perfect, but most problems are solvable with
                the right approach. The key is understanding that Mac Excel
                operates differently from its Windows counterpart. It’s not
                worse, just different.
              </p>
              <p>
                Start with the simple fixes, keep macOS and Excel in step with
                each other, and back up before you change anything. Do that and
                most of the problems in this guide never get the chance to
                become a deadline emergency.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <h3 className={styles.authorTitle}>About the author</h3>
                  <p className={styles.authorName}>{AUTHOR_NAME}</p>
                  <p className={styles.authorBio}>
                    Daniel is a developer at Office Experts, a curious mind into
                    the world of programming, design and SEO. Office Experts
                    Group is an Australian Microsoft consultancy established in
                    2000. If you have any questions, please feel free to get in
                    contact via the form below.
                  </p>
                </div>
              </div>
            </section>

            {/* RELATED */}
            <section
              className={styles.section}
              id="related"
              aria-labelledby="related-heading"
            >
              <h2 id="related-heading">
                Related <span className={styles.accent}>reading</span>
              </h2>
              <ul className={styles.related}>
                {RELATED.map((r) => (
                  <li key={r.href}>
                    {r.external ? (
                      <a
                        href={r.href}
                        className={styles.relatedCard}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.relatedTitle}>{r.title}</span>
                        <span className={styles.relatedText}>{r.text}</span>
                        <span className={styles.relatedArrow}>
                          Read more <IconArrow />
                        </span>
                      </a>
                    ) : (
                      <Link href={r.href} className={styles.relatedCard}>
                        <span className={styles.relatedTitle}>{r.title}</span>
                        <span className={styles.relatedText}>{r.text}</span>
                        <span className={styles.relatedArrow}>
                          Read more <IconArrow />
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
}
