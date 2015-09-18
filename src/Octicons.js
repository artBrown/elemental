var list = [
	{ label: 'Alert',                          value: 'alert',                          className: 'octicon octicon-alert' },
	{ label: 'Arrow Down',                     value: 'arrow-down',                     className: 'octicon octicon-arrow-down' },
	{ label: 'Arrow Left',                     value: 'arrow-left',                     className: 'octicon octicon-arrow-left' },
	{ label: 'Arrow Right',                    value: 'arrow-right',                    className: 'octicon octicon-arrow-right' },
	{ label: 'Arrow Small-down',               value: 'arrow-small-down',               className: 'octicon octicon-arrow-small-down' },
	{ label: 'Arrow Small-left',               value: 'arrow-small-left',               className: 'octicon octicon-arrow-small-left' },
	{ label: 'Arrow Small-right',              value: 'arrow-small-right',              className: 'octicon octicon-arrow-small-right' },
	{ label: 'Arrow Small-up',                 value: 'arrow-small-up',                 className: 'octicon octicon-arrow-small-up' },
	{ label: 'Arrow Up',                       value: 'arrow-up',                       className: 'octicon octicon-arrow-up' },
	{ label: 'Microscope',                     value: 'microscope',                     className: 'octicon octicon-microscope' },
	{ label: 'Beaker',                         value: 'beaker',                         className: 'octicon octicon-beaker' },
	{ label: 'Bell',                           value: 'bell',                           className: 'octicon octicon-bell' },
	{ label: 'Book',                           value: 'book',                           className: 'octicon octicon-book' },
	{ label: 'Bookmark',                       value: 'bookmark',                       className: 'octicon octicon-bookmark' },
	{ label: 'Briefcase',                      value: 'briefcase',                      className: 'octicon octicon-briefcase' },
	{ label: 'Broadcast',                      value: 'broadcast',                      className: 'octicon octicon-broadcast' },
	{ label: 'Browser',                        value: 'browser',                        className: 'octicon octicon-browser' },
	{ label: 'Bug',                            value: 'bug',                            className: 'octicon octicon-bug' },
	{ label: 'Calendar',                       value: 'calendar',                       className: 'octicon octicon-calendar' },
	{ label: 'Check',                          value: 'check',                          className: 'octicon octicon-check' },
	{ label: 'Checklist',                      value: 'checklist',                      className: 'octicon octicon-checklist' },
	{ label: 'Chevron Down',                   value: 'chevron-down',                   className: 'octicon octicon-chevron-down' },
	{ label: 'Chevron Left',                   value: 'chevron-left',                   className: 'octicon octicon-chevron-left' },
	{ label: 'Chevron Right',                  value: 'chevron-right',                  className: 'octicon octicon-chevron-right' },
	{ label: 'Chevron Up',                     value: 'chevron-up',                     className: 'octicon octicon-chevron-up' },
	{ label: 'Circle Slash',                   value: 'circle-slash',                   className: 'octicon octicon-circle-slash' },
	{ label: 'Circuit Board',                  value: 'circuit-board',                  className: 'octicon octicon-circuit-board' },
	{ label: 'Clippy',                         value: 'clippy',                         className: 'octicon octicon-clippy' },
	{ label: 'Clock',                          value: 'clock',                          className: 'octicon octicon-clock' },
	{ label: 'Cloud Download',                 value: 'cloud-download',                 className: 'octicon octicon-cloud-download' },
	{ label: 'Cloud Upload',                   value: 'cloud-upload',                   className: 'octicon octicon-cloud-upload' },
	{ label: 'Code',                           value: 'code',                           className: 'octicon octicon-code' },
	{ label: 'Color Mode',                     value: 'color-mode',                     className: 'octicon octicon-color-mode' },
	{ label: 'Comment Add',                    value: 'comment-add',                    className: 'octicon octicon-comment-add' },
	{ label: 'Comment',                        value: 'comment',                        className: 'octicon octicon-comment' },
	{ label: 'Comment Discussion',             value: 'comment-discussion',             className: 'octicon octicon-comment-discussion' },
	{ label: 'Credit Card',                    value: 'credit-card',                    className: 'octicon octicon-credit-card' },
	{ label: 'Dash',                           value: 'dash',                           className: 'octicon octicon-dash' },
	{ label: 'Dashboard',                      value: 'dashboard',                      className: 'octicon octicon-dashboard' },
	{ label: 'Database',                       value: 'database',                       className: 'octicon octicon-database' },
	{ label: 'Clone',                          value: 'clone',                          className: 'octicon octicon-clone' },
	{ label: 'Desktop Download',               value: 'desktop-download',               className: 'octicon octicon-desktop-download' },
	{ label: 'Device Camera',                  value: 'device-camera',                  className: 'octicon octicon-device-camera' },
	{ label: 'Device Camera-video',            value: 'device-camera-video',            className: 'octicon octicon-device-camera-video' },
	{ label: 'Device Desktop',                 value: 'device-desktop',                 className: 'octicon octicon-device-desktop' },
	{ label: 'Device Mobile',                  value: 'device-mobile',                  className: 'octicon octicon-device-mobile' },
	{ label: 'Diff',                           value: 'diff',                           className: 'octicon octicon-diff' },
	{ label: 'Diff Added',                     value: 'diff-added',                     className: 'octicon octicon-diff-added' },
	{ label: 'Diff Ignored',                   value: 'diff-ignored',                   className: 'octicon octicon-diff-ignored' },
	{ label: 'Diff Modified',                  value: 'diff-modified',                  className: 'octicon octicon-diff-modified' },
	{ label: 'Diff Removed',                   value: 'diff-removed',                   className: 'octicon octicon-diff-removed' },
	{ label: 'Diff Renamed',                   value: 'diff-renamed',                   className: 'octicon octicon-diff-renamed' },
	{ label: 'Ellipsis',                       value: 'ellipsis',                       className: 'octicon octicon-ellipsis' },
	{ label: 'Eye Unwatch',                    value: 'eye-unwatch',                    className: 'octicon octicon-eye-unwatch' },
	{ label: 'Eye Watch',                      value: 'eye-watch',                      className: 'octicon octicon-eye-watch' },
	{ label: 'Eye',                            value: 'eye',                            className: 'octicon octicon-eye' },
	{ label: 'File Binary',                    value: 'file-binary',                    className: 'octicon octicon-file-binary' },
	{ label: 'File Code',                      value: 'file-code',                      className: 'octicon octicon-file-code' },
	{ label: 'File Directory',                 value: 'file-directory',                 className: 'octicon octicon-file-directory' },
	{ label: 'File Media',                     value: 'file-media',                     className: 'octicon octicon-file-media' },
	{ label: 'File Pdf',                       value: 'file-pdf',                       className: 'octicon octicon-file-pdf' },
	{ label: 'File Submodule',                 value: 'file-submodule',                 className: 'octicon octicon-file-submodule' },
	{ label: 'File Symlink-directory',         value: 'file-symlink-directory',         className: 'octicon octicon-file-symlink-directory' },
	{ label: 'File Symlink-file',              value: 'file-symlink-file',              className: 'octicon octicon-file-symlink-file' },
	{ label: 'File Text',                      value: 'file-text',                      className: 'octicon octicon-file-text' },
	{ label: 'File Zip',                       value: 'file-zip',                       className: 'octicon octicon-file-zip' },
	{ label: 'Flame',                          value: 'flame',                          className: 'octicon octicon-flame' },
	{ label: 'Fold',                           value: 'fold',                           className: 'octicon octicon-fold' },
	{ label: 'Gear',                           value: 'gear',                           className: 'octicon octicon-gear' },
	{ label: 'Gift',                           value: 'gift',                           className: 'octicon octicon-gift' },
	{ label: 'Gist',                           value: 'gist',                           className: 'octicon octicon-gist' },
	{ label: 'Gist Secret',                    value: 'gist-secret',                    className: 'octicon octicon-gist-secret' },
	{ label: 'Git Branch-create',              value: 'git-branch-create',              className: 'octicon octicon-git-branch-create' },
	{ label: 'Git Branch-delete',              value: 'git-branch-delete',              className: 'octicon octicon-git-branch-delete' },
	{ label: 'Git Branch',                     value: 'git-branch',                     className: 'octicon octicon-git-branch' },
	{ label: 'Git Commit',                     value: 'git-commit',                     className: 'octicon octicon-git-commit' },
	{ label: 'Git Compare',                    value: 'git-compare',                    className: 'octicon octicon-git-compare' },
	{ label: 'Git Merge',                      value: 'git-merge',                      className: 'octicon octicon-git-merge' },
	{ label: 'Git Pull-request-abandoned',     value: 'git-pull-request-abandoned',     className: 'octicon octicon-git-pull-request-abandoned' },
	{ label: 'Git Pull-request',               value: 'git-pull-request',               className: 'octicon octicon-git-pull-request' },
	{ label: 'Globe',                          value: 'globe',                          className: 'octicon octicon-globe' },
	{ label: 'Graph',                          value: 'graph',                          className: 'octicon octicon-graph' },
	{ label: 'Heart',                          value: 'heart',                          className: 'octicon octicon-heart' },
	{ label: 'History',                        value: 'history',                        className: 'octicon octicon-history' },
	{ label: 'Home',                           value: 'home',                           className: 'octicon octicon-home' },
	{ label: 'Horizontal Rule',                value: 'horizontal-rule',                className: 'octicon octicon-horizontal-rule' },
	{ label: 'Hubot',                          value: 'hubot',                          className: 'octicon octicon-hubot' },
	{ label: 'Inbox',                          value: 'inbox',                          className: 'octicon octicon-inbox' },
	{ label: 'Info',                           value: 'info',                           className: 'octicon octicon-info' },
	{ label: 'Issue Closed',                   value: 'issue-closed',                   className: 'octicon octicon-issue-closed' },
	{ label: 'Issue Opened',                   value: 'issue-opened',                   className: 'octicon octicon-issue-opened' },
	{ label: 'Issue Reopened',                 value: 'issue-reopened',                 className: 'octicon octicon-issue-reopened' },
	{ label: 'Jersey',                         value: 'jersey',                         className: 'octicon octicon-jersey' },
	{ label: 'Key',                            value: 'key',                            className: 'octicon octicon-key' },
	{ label: 'Keyboard',                       value: 'keyboard',                       className: 'octicon octicon-keyboard' },
	{ label: 'Law',                            value: 'law',                            className: 'octicon octicon-law' },
	{ label: 'Light Bulb',                     value: 'light-bulb',                     className: 'octicon octicon-light-bulb' },
	{ label: 'Link',                           value: 'link',                           className: 'octicon octicon-link' },
	{ label: 'Link External',                  value: 'link-external',                  className: 'octicon octicon-link-external' },
	{ label: 'List Ordered',                   value: 'list-ordered',                   className: 'octicon octicon-list-ordered' },
	{ label: 'List Unordered',                 value: 'list-unordered',                 className: 'octicon octicon-list-unordered' },
	{ label: 'Location',                       value: 'location',                       className: 'octicon octicon-location' },
	{ label: 'Gist Private',                   value: 'gist-private',                   className: 'octicon octicon-gist-private' },
	{ label: 'Mirror Private',                 value: 'mirror-private',                 className: 'octicon octicon-mirror-private' },
	{ label: 'Git Fork-private',               value: 'git-fork-private',               className: 'octicon octicon-git-fork-private' },
	{ label: 'Lock',                           value: 'lock',                           className: 'octicon octicon-lock' },
	{ label: 'Logo Github',                    value: 'logo-github',                    className: 'octicon octicon-logo-github' },
	{ label: 'Mail',                           value: 'mail',                           className: 'octicon octicon-mail' },
	{ label: 'Mail Read',                      value: 'mail-read',                      className: 'octicon octicon-mail-read' },
	{ label: 'Mail Reply',                     value: 'mail-reply',                     className: 'octicon octicon-mail-reply' },
	{ label: 'Mark Github',                    value: 'mark-github',                    className: 'octicon octicon-mark-github' },
	{ label: 'Markdown',                       value: 'markdown',                       className: 'octicon octicon-markdown' },
	{ label: 'Megaphone',                      value: 'megaphone',                      className: 'octicon octicon-megaphone' },
	{ label: 'Mention',                        value: 'mention',                        className: 'octicon octicon-mention' },
	{ label: 'Milestone',                      value: 'milestone',                      className: 'octicon octicon-milestone' },
	{ label: 'Mirror Public',                  value: 'mirror-public',                  className: 'octicon octicon-mirror-public' },
	{ label: 'Mirror',                         value: 'mirror',                         className: 'octicon octicon-mirror' },
	{ label: 'Mortar Board',                   value: 'mortar-board',                   className: 'octicon octicon-mortar-board' },
	{ label: 'Mute',                           value: 'mute',                           className: 'octicon octicon-mute' },
	{ label: 'No Newline',                     value: 'no-newline',                     className: 'octicon octicon-no-newline' },
	{ label: 'Octoface',                       value: 'octoface',                       className: 'octicon octicon-octoface' },
	{ label: 'Organization',                   value: 'organization',                   className: 'octicon octicon-organization' },
	{ label: 'Package',                        value: 'package',                        className: 'octicon octicon-package' },
	{ label: 'Paintcan',                       value: 'paintcan',                       className: 'octicon octicon-paintcan' },
	{ label: 'Pencil',                         value: 'pencil',                         className: 'octicon octicon-pencil' },
	{ label: 'Person Add',                     value: 'person-add',                     className: 'octicon octicon-person-add' },
	{ label: 'Person Follow',                  value: 'person-follow',                  className: 'octicon octicon-person-follow' },
	{ label: 'Person',                         value: 'person',                         className: 'octicon octicon-person' },
	{ label: 'Pin',                            value: 'pin',                            className: 'octicon octicon-pin' },
	{ label: 'Plug',                           value: 'plug',                           className: 'octicon octicon-plug' },
	{ label: 'Repo Create',                    value: 'repo-create',                    className: 'octicon octicon-repo-create' },
	{ label: 'Gist New',                       value: 'gist-new',                       className: 'octicon octicon-gist-new' },
	{ label: 'File Directory-create',          value: 'file-directory-create',          className: 'octicon octicon-file-directory-create' },
	{ label: 'File Add',                       value: 'file-add',                       className: 'octicon octicon-file-add' },
	{ label: 'Plus',                           value: 'plus',                           className: 'octicon octicon-plus' },
	{ label: 'Primitive Dot',                  value: 'primitive-dot',                  className: 'octicon octicon-primitive-dot' },
	{ label: 'Primitive Square',               value: 'primitive-square',               className: 'octicon octicon-primitive-square' },
	{ label: 'Pulse',                          value: 'pulse',                          className: 'octicon octicon-pulse' },
	{ label: 'Question',                       value: 'question',                       className: 'octicon octicon-question' },
	{ label: 'Quote',                          value: 'quote',                          className: 'octicon octicon-quote' },
	{ label: 'Radio Tower',                    value: 'radio-tower',                    className: 'octicon octicon-radio-tower' },
	{ label: 'Repo Delete',                    value: 'repo-delete',                    className: 'octicon octicon-repo-delete' },
	{ label: 'Repo',                           value: 'repo',                           className: 'octicon octicon-repo' },
	{ label: 'Repo Clone',                     value: 'repo-clone',                     className: 'octicon octicon-repo-clone' },
	{ label: 'Repo Force-push',                value: 'repo-force-push',                className: 'octicon octicon-repo-force-push' },
	{ label: 'Gist Fork',                      value: 'gist-fork',                      className: 'octicon octicon-gist-fork' },
	{ label: 'Repo Forked',                    value: 'repo-forked',                    className: 'octicon octicon-repo-forked' },
	{ label: 'Repo Pull',                      value: 'repo-pull',                      className: 'octicon octicon-repo-pull' },
	{ label: 'Repo Push',                      value: 'repo-push',                      className: 'octicon octicon-repo-push' },
	{ label: 'Rocket',                         value: 'rocket',                         className: 'octicon octicon-rocket' },
	{ label: 'Rss',                            value: 'rss',                            className: 'octicon octicon-rss' },
	{ label: 'Ruby',                           value: 'ruby',                           className: 'octicon octicon-ruby' },
	{ label: 'Screen Full',                    value: 'screen-full',                    className: 'octicon octicon-screen-full' },
	{ label: 'Screen Normal',                  value: 'screen-normal',                  className: 'octicon octicon-screen-normal' },
	{ label: 'Search Save',                    value: 'search-save',                    className: 'octicon octicon-search-save' },
	{ label: 'Search',                         value: 'search',                         className: 'octicon octicon-search' },
	{ label: 'Server',                         value: 'server',                         className: 'octicon octicon-server' },
	{ label: 'Settings',                       value: 'settings',                       className: 'octicon octicon-settings' },
	{ label: 'Shield',                         value: 'shield',                         className: 'octicon octicon-shield' },
	{ label: 'Log In',                         value: 'log-in',                         className: 'octicon octicon-log-in' },
	{ label: 'Sign In',                        value: 'sign-in',                        className: 'octicon octicon-sign-in' },
	{ label: 'Log Out',                        value: 'log-out',                        className: 'octicon octicon-log-out' },
	{ label: 'Sign Out',                       value: 'sign-out',                       className: 'octicon octicon-sign-out' },
	{ label: 'Squirrel',                       value: 'squirrel',                       className: 'octicon octicon-squirrel' },
	{ label: 'Star Add',                       value: 'star-add',                       className: 'octicon octicon-star-add' },
	{ label: 'Star Delete',                    value: 'star-delete',                    className: 'octicon octicon-star-delete' },
	{ label: 'Star',                           value: 'star',                           className: 'octicon octicon-star' },
	{ label: 'Stop',                           value: 'stop',                           className: 'octicon octicon-stop' },
	{ label: 'Repo Sync',                      value: 'repo-sync',                      className: 'octicon octicon-repo-sync' },
	{ label: 'Sync',                           value: 'sync',                           className: 'octicon octicon-sync' },
	{ label: 'Tag Remove',                     value: 'tag-remove',                     className: 'octicon octicon-tag-remove' },
	{ label: 'Tag Add',                        value: 'tag-add',                        className: 'octicon octicon-tag-add' },
	{ label: 'Tag',                            value: 'tag',                            className: 'octicon octicon-tag' },
	{ label: 'Telescope',                      value: 'telescope',                      className: 'octicon octicon-telescope' },
	{ label: 'Terminal',                       value: 'terminal',                       className: 'octicon octicon-terminal' },
	{ label: 'Three Bars',                     value: 'three-bars',                     className: 'octicon octicon-three-bars' },
	{ label: 'Thumbsdown',                     value: 'thumbsdown',                     className: 'octicon octicon-thumbsdown' },
	{ label: 'Thumbsup',                       value: 'thumbsup',                       className: 'octicon octicon-thumbsup' },
	{ label: 'Tools',                          value: 'tools',                          className: 'octicon octicon-tools' },
	{ label: 'Trashcan',                       value: 'trashcan',                       className: 'octicon octicon-trashcan' },
	{ label: 'Triangle Down',                  value: 'triangle-down',                  className: 'octicon octicon-triangle-down' },
	{ label: 'Triangle Left',                  value: 'triangle-left',                  className: 'octicon octicon-triangle-left' },
	{ label: 'Triangle Right',                 value: 'triangle-right',                 className: 'octicon octicon-triangle-right' },
	{ label: 'Triangle Up',                    value: 'triangle-up',                    className: 'octicon octicon-triangle-up' },
	{ label: 'Unfold',                         value: 'unfold',                         className: 'octicon octicon-unfold' },
	{ label: 'Unmute',                         value: 'unmute',                         className: 'octicon octicon-unmute' },
	{ label: 'Versions',                       value: 'versions',                       className: 'octicon octicon-versions' },
	{ label: 'Watch',                          value: 'watch',                          className: 'octicon octicon-watch' },
	{ label: 'Remove Close',                   value: 'remove-close',                   className: 'octicon octicon-remove-close' },
	{ label: 'X',                              value: 'x',                              className: 'octicon octicon-x' },
	{ label: 'Zap',                            value: 'zap',                            className: 'octicon octicon-zap' },
];

var map = {};
list.forEach(function(icon) {
	map[icon.value] = icon;
});
function pluck(arr, key) {
	return arr.map(obj => obj[key]);
}

module.exports = {
	list: list,
	keys: pluck(list, 'value'),
	map: map
};