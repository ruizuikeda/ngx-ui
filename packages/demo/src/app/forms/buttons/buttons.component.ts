import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileUploader } from '@swimlane/ng2-file-upload';

@Component({
  selector: 'demo-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  buttonPromise: Promise<unknown> = undefined;

  promises: Record<string, Promise<unknown>> = {};

  uploadOptions = {
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    autoUpload: true,
  };

  uploaderInstance = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    autoUpload: false,
  });

  onClick(msg: string, targetId?: string) {
    console.log('Demo app click: ', msg);

    const buttonPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject('I fail you!');
        }
      }, 3000);
    });

    buttonPromise
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('fail');
      });

    if (targetId) {
      this.promises[targetId] = buttonPromise;
    } else {
      this.buttonPromise = buttonPromise;
    }
  }

  importMd = `
    \`\`\`ts
    import { ButtonModule } from '@swimlane/ngx-ui/button';
    \`\`\`

    \`ngx-button\` can accept a \`Promise\` and will show the spinner when the \`Promise\` is being executed.
  `;

  buttonsMd = `
    \`\`\`html
    <button type="button" class="btn">Default</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary btn-primary-gradient">
      Primary Gradient
    </button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-bordered">Bordered</button>
    <button type="button" class="btn btn-link">Link</button>
    \`\`\`
  `;

  disabledButtonsMd = `
    \`\`\`html
    <button type="button" class="btn" disabled>Default</button>
    <button type="button" class="btn btn-primary" disabled>Primary</button>
    <button type="button" class="btn btn-primary btn-primary-gradient" disabled>
      Primary Gradient
    </button>
    <button type="button" class="btn btn-warning" disabled>Warning</button>
    <button type="button" class="btn btn-danger" disabled>Danger</button>
    <button type="button" class="btn btn-bordered" disabled>Bordered</button>
    <button type="button" class="btn btn-link" disabled>Link</button>
    \`\`\`
  `;

  buttonsWithIconsMd = `
    \`\`\`html
    <button type="button" class="btn btn-primary">
      <i class="ngx-icon ngx-plus has-text"></i>
      Text
    </button>
    <button type="button" class="btn btn-primary">
      Text
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-primary">
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient">
      <i class="ngx-icon ngx-plus has-text"></i>
      Text
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient">
      Text
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient">
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <button type="button" class="btn btn-bordered">
      <i class="ngx-icon ngx-plus has-text"></i>
      Text
    </button>
    <button type="button" class="btn btn-bordered">
      Text
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-bordered">
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <button type="button" class="btn btn-link">
      <i class="ngx-icon ngx-plus has-text"></i>
      Link
    </button>
    <button type="button" class="btn btn-link">
      Link
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-link">
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <br />
    <button type="button" class="btn btn-primary" disabled>
      <i class="ngx-icon ngx-plus has-text"></i>
      Text
    </button>
    <button type="button" class="btn btn-primary" disabled>
      Text
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-primary" disabled>
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient" disabled>
      <i class="ngx-icon ngx-plus has-text"></i>
      Text
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient" disabled>
      Text
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient" disabled>
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <button type="button" class="btn btn-bordered" disabled>
      <i class="ngx-icon ngx-plus has-text"></i>
      Text
    </button>
    <button type="button" class="btn btn-bordered" disabled>
      Text
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-bordered" disabled>
      <i class="ngx-icon ngx-plus"></i>
    </button>
    <button type="button" class="btn btn-link" disabled>
      <i class="ngx-icon ngx-plus has-text"></i>
      Link
    </button>
    <button type="button" class="btn btn-link" disabled>
      Link
      <i class="ngx-icon ngx-plus has-text-left"></i>
    </button>
    <button type="button" class="btn btn-link" disabled>
      <i class="ngx-icon ngx-plus"></i>
    </button>
    \`\`\`
  `;

  buttonSizesMd = `
    \`\`\`html
    <button type="button" class="btn btn-primary small">
      <i class="ngx-icon ngx-plus has-text"></i>
      Small
    </button>
    <button type="button" class="btn btn-primary">
      <i class="ngx-icon ngx-plus has-text"></i>
      Default
    </button>
    <button type="button" class="btn btn-primary large">
      <i class="ngx-icon ngx-plus has-text"></i>
      Large
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient small">
      <i class="ngx-icon ngx-plus has-text"></i>
      Small
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient">
      <i class="ngx-icon ngx-plus has-text"></i>
      Default
    </button>
    <button type="button" class="btn btn-primary btn-primary-gradient large">
      <i class="ngx-icon ngx-plus has-text"></i>
      Large
    </button>
    \`\`\`
  `;

  linksMd = `
    \`\`\`html
    <a class="btn" href="/">Default</a>
    <a class="btn btn-primary" href="/">Primary</a>
    <a class="btn btn-primary btn-primary-gradient" href="/">Primary Gradient</a>
    <a class="btn btn-warning" href="/">Warning</a>
    <a class="btn btn-danger" href="/">Danger</a>
    <a class="btn btn-bordered" href="/">Bordered</a>
    <br><br>
    <a class="btn disabled" href="/">Default</a>
    <a class="btn btn-primary disabled" href="/">Primary</a>
    <a class="btn btn-primary btn-primary-gradient disabled" href="/">
      Primary Gradient
    </a>
    <a class="btn btn-warning disabled" href="/">Warning</a>
    <a class="btn btn-danger disabled" href="/">Danger</a>
    <a class="btn btn-bordered disabled" href="/">Bordered</a>
    \`\`\`
  `;

  ngxButtonHtmlMd = `
    \`\`\`html
    <ngx-button
      [promise]="promises['defaultButton']"
      (click)="onClick('button click', 'defaultButton')"
      class="btn"
    >
      Default
    </ngx-button>
    <ngx-button
      [promise]="promises['primaryButton']"
      (click)="onClick('button click', 'primaryButton')"
      class="btn btn-primary"
    >
      Primary
    </ngx-button>
    <ngx-button
      [promise]="promises['gradiantButton']"
      (click)="onClick('button click', 'gradiantButton')"
      class="btn btn-primary btn-primary-gradient"
    >
      Primary Gradient
    </ngx-button>
    <ngx-button
      #failButton
      [promise]="promises['failButton']"
      (click)="
        onClick('button click', 'failButton');
        failButton.state = 'fail';
        failButton.updateState()
      "
      class="btn btn-warning"
    >
      Warning
    </ngx-button>
    <ngx-button
      #sucessButton
      [promise]="promises['sucessButton']"
      (click)="
        onClick('button click', 'sucessButton');
        sucessButton.state = 'success';
        sucessButton.updateState()
      "
      class="btn btn-danger"
    >
      Danger
    </ngx-button>
    <ngx-button
      [promise]="promises['borderButton']"
      (click)="onClick('button click', 'borderButton')"
      class="btn btn-bordered"
    >
      Bordered
    </ngx-button>
    <ngx-button
      [promise]="promises['linkButton']"
      (click)="onClick('button click', 'linkButton')"
      class="btn btn-link"
    >
      Link
    </ngx-button>
    <ngx-button
      [promise]="promises['noTimeoutButton']"
      [timeout]="0"
      (click)="onClick('button click', 'noTimeoutButton')"
      class="btn"
    >
      No Timeout
    </ngx-button>
    <br />
    <br />
    <ngx-button (click)="onClick('button click')" class="btn" disabled>
      Default
    </ngx-button>
    <ngx-button state="inProgress" class="btn btn-primary" disabled>
      Primary
    </ngx-button>
    <ngx-button
      state="inProgress"
      class="btn btn-primary btn-primary-gradient"
      disabled
    >
      Primary Gradient
    </ngx-button>
    <ngx-button state="fail" class="btn btn-warning" disabled>Warning</ngx-button>
    <ngx-button state="success" class="btn btn-danger" disabled>
      Danger
    </ngx-button>
    <ngx-button class="btn btn-bordered" disabled>Bordered</ngx-button>
    <ngx-button class="btn btn-link" disabled>Link</ngx-button>
    <ngx-button [timeout]="0" disabled class="btn">No Timeout</ngx-button>
    \`\`\`
  `;

  ngxButtonTsMd = `
    \`\`\`ts
    buttonPromise: Promise<unknown> = undefined;
    promises: Record<string, Promise<unknown>> = {};

    onClick(msg: string, targetId?: string) {
      console.log('Demo app click: ', msg);

      const buttonPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.5) {
            resolve('Success!');
          } else {
            reject('I fail you!');
          }
        }, 3000);
      });

      buttonPromise
        .then(() => {
          console.log('success');
        })
        .catch(() => {
          console.log('fail');
        });

      if (targetId) {
        this.promises[targetId] = buttonPromise;
      } else {
        this.buttonPromise = buttonPromise;
      }
    }
    \`\`\`
  `;
  ngxButtonMd = {
    Markup: this.ngxButtonHtmlMd,
    TypeScript: this.ngxButtonTsMd,
  };

  fileUploadImportMd = `
    \`\`\`ts
    import { FileButtonModule } from '@swimlane/ngx-ui/file-button';
    \`\`\`
  `;

  standardFileUploadHtmlMd = `
    \`\`\`html
    <ngx-file-button name="uper" styleType="standard" [options]="uploadOptions">
      Choose File
    </ngx-file-button>

    <ngx-file-button
      name="uper1"
      [disabled]="true"
      styleType="standard"
      [options]="uploadOptions"
    >
      Choose File
    </ngx-file-button>
    \`\`\`
  `;

  standardFileUploadTsMd = `
    \`\`\`ts
    import { FileUploaderOptions } from '@swimlane/ng2-file-upload';

    @Component({
      selector: 'app',
      templateUrl: 'app.template.html'
    })
    export class AppComponent {
      uploadOptions: FileUploaderOptions = {
        url: 'https://evening-anchorage-3159.herokuapp.com/api/',
        autoUpload: true,
      };
    }
    \`\`\`
  `;
  standardFileUploadMd = {
    Markup: this.standardFileUploadHtmlMd,
    TypeScript: this.standardFileUploadTsMd,
  };

  standardFileUploadManualHtmlMd = `
    \`\`\`html
    <ngx-file-button
      name="uper2"
      styleType="standard"
      [uploader]="uploaderInstance"
    >
      Choose File
    </ngx-file-button>
    <button
      class="btn"
      style="margin-left: 2rem"
      (click)="uploaderInstance.uploadAll()"
    >
      Send
    </button>
    \`\`\`
  `;

  standardFileUploadManualTsMd = `
    \`\`\`ts
    import { FileUploader } from '@swimlane/ng2-file-upload';

    @Component({
      selector: 'app',
      templateUrl: 'app.template.html'
    })
    export class AppComponent {
      uploaderInstance = new FileUploader({
        url: 'https://evening-anchorage-3159.herokuapp.com/api/',
        autoUpload: false,
      });
    }
    \`\`\`
  `;
  standardFileUploadManualMd = {
    Markup: this.standardFileUploadManualHtmlMd,
    TypeScript: this.standardFileUploadManualTsMd,
  };

  dropzoneTemplateMd = `
    \`\`\`html
    <ngx-file-button [uploader]="uploaderInstance">
      <ng-template let-uploader>
        <div style="height: 200px; border: 2px dashed #666">
          <div
            style="
              position: relative;
              text-align: center;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          >
            DRAG & DROP YOUR FILE
            <br />
            <div class="ngx-file-button">
              <button
                type="button"
                class="ngx-file-button-button"
                [disabled]="uploader.isUploading"
              >
                <input
                  ng2FileSelect
                  type="file"
                  class="ngx-file-button-input"
                  id="file-input"
                  [uploader]="uploader"
                />
                <label
                  for="file-input"
                  class="btn btn-link ngx-file-button-label"
                  style="border-bottom: 1px dashed #fff"
                >
                  Or click to choose
                </label>
              </button>
            </div>
          </div>
        </div>
      </ng-template>
    </ngx-file-button>
    \`\`\`
  `;

  progressUploadHtmlMd = `
    \`\`\`html
    <ngx-file-button name="uper3" styleType="progress" [options]="uploadOptions">
      Progress
    </ngx-file-button>

    <ngx-file-button
      name="uper4"
      disabled="true"
      styleType="progress"
      [options]="uploadOptions"
    >
      Progress Disabled
    </ngx-file-button>
    \`\`\`
  `;

  progressUploadTsMd = `
    \`\`\`ts
    import { FileUploaderOptions } from '@swimlane/ng2-file-upload';

    @Component({
      selector: 'app',
      templateUrl: 'app.template.html'
    })
    export class AppComponent {
      uploadOptions: FileUploaderOptions = {
        url: 'https://evening-anchorage-3159.herokuapp.com/api/',
        autoUpload: true,
      };
    }
    \`\`\`
  `;
  progressUploadMd = {
    Markup: this.progressUploadHtmlMd,
    TypeScript: this.progressUploadTsMd,
  };

  longPressButtonImportMd = `
    \`\`\`ts
    import { LongPressButtonModule } from '@swimlane/ngx-ui/long-press-button';
    \`\`\`
  `;

  longPressDefaultMd = `
    \`\`\`html
    <ngx-long-press-button (longPress)="onClick('button click')"></ngx-long-press-button>
    \`\`\`
  `;

  longPressConfigMd = `
    \`\`\`html
    <ngx-long-press-button (longPress)="onClick('button click')" icon="alert" duration="1000"></ngx-long-press-button>
    \`\`\`
  `;
}